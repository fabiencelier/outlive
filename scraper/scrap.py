from person import scrap_id

ids = open("data/new.txt").read().split("\n")
for id in ids:
    p = scrap_id(id)
    print(p)

