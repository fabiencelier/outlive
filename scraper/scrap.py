from person import scrap_id

ids = open("data/wikidata-ids.txt").read().split('\n')
failed = []
for id in ids:
  p = scrap_id(id)
  print(p)