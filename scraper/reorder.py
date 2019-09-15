ids = open("data/wikidata-ids.txt").read().split("\n")


def getKey(val):
    return int(val[1:])


ids.sort(key=getKey)
for id in ids:
    print(id)

