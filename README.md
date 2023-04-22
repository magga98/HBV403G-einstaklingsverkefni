Til þess að keyra appið sjálfur:
- npm install
- npm start

Linkur af verkefninu keyrandi í hýsingu:
-https://hbv403g-einstaklingsverkefni.onrender.com/

Inngangur:
Þegar ég byrjaði á þessu verkefni fannst mér mjög mikilvægt að gera eitthvað sem ég myndi hafa áhuga á, og ákvað ég að finna einhvern auðveldann en skemmtilegann leik.
Þetta verkefni gengur út á að leysa "sliding" púsl, þar sem hægt er að velja mismunandi myndir. 
Markmiðið var að búa til skemmtilegt app sem ég gæti sýnt og leyft öðrum að njóta.

Byrjun:
Ég byrjaði á því að keyra ">npx create-react-app puzzle-game", svo installaði ég browser-sync.
Ég bjó til tvo foldera: 
- components => inniheldur Game.js, sem er virknin á púslu leiknum sjálfum.
- screens => inniheldur HomeScreen.js og PuzzleScreen.js, sem eru skjáirnir sem hægt er að fara á.
Í App.js er header og footer, sem eru sjáanlegir á öllum síðunum. Á header er texti, "Heim", sem hægt er að ýta á til þess að fara aftur á forsíðuna.
Notað er Routes í App.js og Link til þess að flakka á milli síða.

Gögn:
Til þess að sýna alla valmöguleikana á púslunum, höfum við file sem heitir data.js sem inniheldur lista yfir öll púslin (name, slug, category, image, description). Þaðan sækjum við gögn fyrir hvert puzzle með "{data.puzzles.map((puzzle)=>(...))}"

Myndir:
Eins og er, þá er aðeins hægt að spila 3x3 púsl. Það þýðir að fyrir hvert púsl er mynd sem þarf að skipta niður í 9 minni myndir og setja sem background á hverju tile. Til þess að skipta mynd í 9 minni hluti, notaði ég síðu sem heitir: "https://www.imgonline.com.ua/eng/cut-photo-into-pieces.php". Ég bjó til image folder sem hefur myndir af hverju púsli, og fyrir öll púsl annað folder sem inniheldur það púsl skipt í 9 minni hluta. Við notum ${slug} til þess að nálgast þessi gögn.

Leikurinn/Púslið:
Tiles í púslinu byrja á random stað svo það sé hægt að spila sama púsl oftar en einu sinni.
Svo er texti sjáanlegur sem telur öll move sem eru gerð, þannig er hægt að keppast um hver nær að klára púslið á færri moves eða jafnvel reynt að bæta sitt eigið met.
Þegar púslið er klárað, þá kemur upp takki sem hægt er að ýta á til þess að spila aftur.

Lokaorð:
Ég hef mjög gaman af því að búa til útlit á síðunum svo þetta verkefni var sérstaklega skemmtilegt. Ég sé margt sem ég myndi vilja bæta í þetta ef ég hefði meiri tíma, t.d gera virkni fyrir stærri púsl (6x6, 9x9, ...), hafa næturstillingu, gefa val á þema á borðinu sem er undir tiles og margt fleira.

