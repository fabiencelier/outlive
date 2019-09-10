from typing import Dict, List

_CATEGORIES = {
  "singer": ["singer", "singer-songwriter", "rapper"],
  "music":["musician", "guitarist", "pianist", "disc jockey","remixer","record producer"],
  "politics": ["politician", "minister", "president", "political activist"],
  "cinema": ["television actor", "actor", "film director", "film actor"],
  "painter": ["painter"],
  "sport": ["basketball player"],
  "writer": ["writer", "diarist"]
}

def _build_occupation() -> Dict[str, str]:
  occupations = {}
  for (key, values) in _CATEGORIES.items():
    for value in values:
      occupations[value] = key
  return occupations

OCCUPATION_MAP = _build_occupation()


def _match_one_occupation(occupation: str, categories: List[str]):
  if occupation in OCCUPATION_MAP:
    cat = OCCUPATION_MAP[occupation]
    if cat not in categories:
      categories.append(cat)

def match_occupations(occupations: List[str]) -> List[str]:
  categories = []
  for occupation in occupations:
    _match_one_occupation(occupation, categories)
  return categories