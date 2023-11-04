# Spo0ky Dayz Trainer #

![image](https://user-images.githubusercontent.com/63890454/200156459-b0b64493-7c41-45c4-950a-7e63eabc91d0.png)

Egyszerű Spo0ky Dayz Trainer HTML + Javascript alapokon.

* Automatikusan megjelenő, kattintható Spo0kyk (179 db)
* 239 különböző szöveg a figurákra történő kattintáskor
* 6 háttérkép

Az alkalmazás a böngésző helyi tárolójába menti a megjelenített / elkapott Spo0kykat.

Egy spo0ky megjelenítését követően 30 másodpercünk van arra, hogy elkapjuk.

# <b>Konzolból is használható függvények</b>

<b>Spo0kyk indítása</b><br>
spookyInit();<br>

<b>Spo0kyk leállítása</b><br>
spookyStop();<br>

<b>Eredmények listázása</b><br>
eredmenyek();<br>

<b>Eredmények törlése</b><br>
eredmenyekTorlese();<br><br>

Az alkalmazás a konzolban naplózza a működését.

# <b>Különbségek az nCore oldalon futó és az innen letölthető játék között</b><br>

1. Az eredeti játék WebSocket-t használ, amihez pl. NodeJS kell.<br><br>
2. A megjelenő Spookyk lehetnek pozitív vagy negatív tulajdonságúak, ennek megfeleően oszt ki jutalmat vagy büntetést az alkalmazás.<br><br>
3. A jutalmak / büntetések párosítva vannak a jó / rossz tulajdonságú szörnyekkel.<br><br>
4. A megjelenített szörnyek napszaknak megfelelően vannak időzítve, nem kliens oldalon dől el, mikor / mennyi / milyen Spooky jelenik meg.<br><br>

![image](https://i.imgur.com/z8164vh.gif)
