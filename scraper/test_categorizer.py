from categorizer import match_occupations

def test_match_singer():
  assert match_occupations(["singer"]) == ["singer"]

def test_match_guitarist():
  assert match_occupations(["guitarist"]) == ["music"]

def test_match_two():
  assert match_occupations(["guitarist", "singer"]) == ["music", "singer"]

def test_match_same_category():
  assert match_occupations(["singer", "singer-songwriter", "rapper"]) == ["singer"]