import requests

albums = requests.get("http://localhost:3000/albums")
print(albums.text)

members = requests.get("http://localhost:3000/members")
print(members.text)

concertTours = requests.get("http://localhost:3000/concertTours")
print(concertTours.text)

labels = requests.get("http://localhost:3000/labels")
print(labels.text)


