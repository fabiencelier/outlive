import json
from urllib import request
from dataclasses import dataclass
import datetime
from typing import Dict, List
import hashlib

from categorizer import match_occupations

@dataclass
class Person:
  
  full_name: str
  wikidata_id: str
  wikipedia_page: str
  short_description: str
  birth_date: str
  death_date: str
  first_name: str
  family_name: str
  manner_of_death: str
  cause_of_death: str
  gender: str
  image: str
  imdb_id: str
  occupations: str
  deezer: str
  nationality: str = ""
  exact_dates: str = "TRUE"

  def get_categories(self):
    categories = match_occupations(self.occupations.split(","))
    return ",".join(categories)

  def __str__(self):
    return (
      f"{self.wikidata_id},,"
      f"{self.birth_date},"
      f"{self.death_date},"
      f"{self.first_name},"
      f"{self.family_name},"
      f"\"{self.full_name}\","
      f"\"{self.short_description}\","
      f"\"{self.image}\","
      f"\"{self.wikipedia_page}\","
      f"\"{self.get_categories()}\","
      f"{self.exact_dates},"
      f"{self.nationality},"
      f"{self.manner_of_death},"
      f"{self.cause_of_death},"
      f"{self.imdb_id},"
      f"{self.gender},"
      f"\"{self.occupations}\","
      f"{self.deezer}"
    )


def extract_date(item) -> str:
  string_date = item[0]["mainsnak"]["datavalue"]["value"]["time"]
  date = datetime.datetime.strptime( string_date, "+%Y-%m-%dT%H:%M:%SZ" )
  return date.strftime("%Y-%m-%d")

def get_json_for_ids(ids: List[str]):
  ids_str = "|".join(ids)
  url =f"https://www.wikidata.org/w/api.php?action=wbgetentities&ids={ids_str}&format=json"
  content = request.urlopen(url).read()
  return json.loads(content)["entities"]

def extract_id(json_content, prop: str) -> str:
  if prop in json_content["claims"]:
    return json_content["claims"][prop][0]["mainsnak"]["datavalue"]["value"]["id"]
  return None

def get_label(json_content, prop: str) -> str:
  return json_content[prop]["labels"]["en"]["value"]

def get_additional_data(json_person):
  fields = {
    "first_name": "P735",
    "family_name": "P734",
    "manner_of_death": "P1196",
    "cause_of_death": "P509",
    "gender": "P21",
  }
  ids = {}
  for (field, id) in fields.items():
    ids[field] = extract_id(json_person, id)
  valid_ids = [ id for id in list(ids.values()) if id is not None]
  json_data = get_json_for_ids(valid_ids)
  data = {}
  for (field, id) in ids.items():
    if id is None:
      data[field] = ""
    else:
      data[field] = get_label(json_data, id)
  return data

def get_occupations(json_person):
  ids = [ occupation["mainsnak"]["datavalue"]["value"]["id"] for occupation in json_person["claims"]["P106"]]
  json_data = get_json_for_ids(ids)
  occupations = [ get_label(json_data, id) for id in ids ]
  return ",".join(occupations)

def get_image(json_person) -> str:
  if "P18" not in json_person["claims"]:
    return ""
  pic_name = json_person["claims"]["P18"][0]["mainsnak"]["datavalue"]["value"]
  m = hashlib.md5()
  m.update(pic_name.replace(" ","_").encode('utf-8'))
  md5sum = m.hexdigest()
  return f"https://upload.wikimedia.org/wikipedia/commons/{md5sum[0]}/{''.join(md5sum[0:2])}/{pic_name.replace(' ', '_')}"
  
def get_imdb(json_person) -> str:
  if "P345" not in json_person["claims"]:
    return ""
  return json_person["claims"]["P345"][0]["mainsnak"]["datavalue"]["value"]

def get_deezer_id(json_person) -> str:
  if "P2722" not in json_person["claims"]:
    return ""
  return json_person["claims"]["P2722"][0]["mainsnak"]["datavalue"]["value"]


def scrap_id(id: str)-> Person:
  json_content = get_json_for_ids([id])[id]
  descr = json_content["descriptions"]["en"]["value"]
  wikipedia_id = json_content["sitelinks"]["enwiki"]["title"].replace(" ", "_")
  wikipedia_page = f"https://en.wikipedia.org/wiki/{wikipedia_id}"
  name = json_content["labels"]["en"]["value"]
  birth = extract_date(json_content["claims"]["P569"])
  death = extract_date(json_content["claims"]["P570"])
  additional_data = get_additional_data(json_content)
  return Person(
    full_name=name,
    wikidata_id=id,
    short_description=descr,
    birth_date=birth,
    death_date=death,
    first_name=additional_data["first_name"],
    family_name=additional_data["family_name"],
    manner_of_death=additional_data["manner_of_death"],
    cause_of_death=additional_data["cause_of_death"],
    gender=additional_data["gender"],
    imdb_id=get_imdb(json_content),
    image=get_image(json_content),
    wikipedia_page=wikipedia_page,
    occupations=get_occupations(json_content),
    deezer=get_deezer_id(json_content)
  )