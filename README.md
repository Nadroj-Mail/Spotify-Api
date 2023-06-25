# Spotify-Api
Spotify api code to retrieve an artists data. Genres, followers, popularity, ect...

# Making-an-App
The Client-id and the Client-Secret is found when from the created app dashboard through the setting menu.
![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/957216d3-f40a-46f3-be74-9a286ef9c5ee)
which are both needed to generate the access token

# How-To
Place your Client-id and the Client-Secret replaceing the placeholder text in the defined strings
![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/279ce584-db17-45e4-957b-071ee65133e0)

_**In spotify's website**_

Since the java Script program is console base it should be ran in the devs console

Press ctrl+shift+j

![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/bc93a9f9-1c7c-447a-9621-ee6feab78bad)

Paste the [script](https://github.com/Death-Coffin/Spotify-Api/blob/main/accessToken.js) in the console and press enter.

It should output somthing like this

![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/8f238ccd-c9c1-4e40-b7b8-b9d9f79a811e)


Once the access token is aquired use the [csharp program](https://github.com/Death-Coffin/Spotify-Api/blob/main/Program.cs).

A spotify artist id is the base-62 identifier found at the end of the Spotify URI

![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/97f3d30a-f1d3-48e4-81a0-596c2b9c7174)

Once the program has been apended run it and it should provide info on the artist in a JSON file format, eg:

![image](https://github.com/Death-Coffin/Spotify-Api/assets/129228615/e3457fa8-347a-4dda-88df-4a6b9eb08077)
