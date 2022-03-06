## :heavy_check_mark: Sual 1

#### `em` və `rem` ölçüləndirmə dəyərləri arasında hansı fərqlər var?

Responsiv saytlar üçün biz `px`-dən yox, `em` və `rem`-dən istifadə etməliyik. Çünki `px` ölçü vahidindən istifadə edərkən media sorğuları yazanda `px`-dən istifadə etdiyimiz çox teqə yenidən ölçü verməli oluruq, amma `em` və `rem` ilə sadəcə `body` ya da `html` teqinə ölçü verməyimiz bəs edir. `em` ölçü vahidi özünün valideyn elementinin şrift ölçüsünü əsas götürür. Əgər valideyn elementinə şrift ölçüsü verilməyibsə onda `body` teqinə verdiyimiz şrift ölçüsünü əsas götürür. Məsələn, html-də `span` teqi `div` teqinin (`div` teqinə 10px şrift ölçüsü verək) içində yazılıbsa, `span` teqi (`span` teqinə 3em şrift ölçüsü verək) valideyn elementinin (yəni `div` teqinin) şrift ölçüsünü əsas götürəcək (beləliklə, `span` teqinin şrift ölçüsü 30px olacaq (3em = 3 x 10px)). `Body` teqinə hər hansısa şrift ölçüsü verməyimiz bunu dəyişməyəcək.

_Nümunə:_

```css
body {
  font-size: 20px;
}

p {
  font-size: 2em; /* 2em = 2 x 20px = 40px */
}
```

Burada 2em `body` teqinə verdiyimiz şrift ölçüsünün 2 qatı mənasına gəlir. Ona görə də `p` teqinin fontu 40px olacaq.

_Başqa bir nümunəyə baxaq:_

```css
h4 {
  font-size: 11px;
  padding-bottom: 3em; /* 3em = 3 x 11px = 33px */
}
```

Burada `em` `h4`-ə verdiyimiz ölçünü əsas götürür.

`rem` isə `body` teqinə yox, `html` teqinə verdiyimiz ölçünü əsas götürür. Amma tək fərqi ondadır ki, `em` teqi kimi özünün valideyn elementinin dəyərini götürə bilmir, yalnız html teqinin (root) ölçüsünü əsas götürür.

_Nümunə:_

```css
html {
  font-size: 30px;
}

h1 {
  font-size: 4rem; /* 4rem= 4 x 30px = 120px */
}
```

Bu halda `h1` teqinin ölçüsü 120px olacaq.

_Qeyd:_ İlkin olaraq `html` və `body` teqlərinin şrift ölçüsü 16px-dir. Yəni heç bir dəyər verməsək bu ölçünü əsas götürəcək (1em = 16px, 1rem = 16px).

<br>

## :heavy_check_mark: Sual 2

#### `Background-origin` və `background-clip` xassələri aralarında hansı fərqlər var?

Qısa olaraq desək `background-origin` `background-image` ilə təyin olunan fon şəklinin haradan başlayacağını təyin edir. İlkin dəyəri `padding-box`-dur. `Background-clip` xassəsi isə fon şəklinin və ya fon rənginin (`background-origin` fon rənginə təsir etmir) həm haradan başlayacağını, həm də harada bitəcəyini təyin edir. İlkin dəyəri `border-box`-dur.

<br>

## :heavy_check_mark: Sual 3

#### `::selection` selektorundan harada istifadə olunur?

`::selection` selektoru istifadəçi saytdakı hansısa elementi seçərkən həmin elementin necə görünəcəyini təyin edir. Bir neçə CSS parametri tətbiq edə bilir: `::selection` selektor: `color`, `background`, `cursor` və `outline`.

_Nümunə:_

```css
::selection {
  color: black;
  background: yellow;
}
```

Bu zaman istifadəçinin seçdiyi mətn (kopyalamaq üçün və s.) sarı arxa fonlu qara yazı olacaq (əgər mətn seçibsə).

<br>

## :heavy_check_mark: Sual 4

#### `h1` - `h6`, `div`, `a`, `button`, `ul`, `li`, `section`, `img`, `span` teqlərinin ilkin CSS xüsusiyyətləri nələrdir?

1. `h1`

```css
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

2.  `h2`

```css
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

3.  `h3`

```css
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

4.  `h4`

    Şrift ölçüsü 1em-dir, ona görə də yazmağa ehtiyac yoxdur.

```css
h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

5.  `h5`

```css
h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

6.  `h6`

```css
h6 {
  display: block;
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
```

7. `div`

```css
div {
  display: block;
}
```

8. `a`

```css
a {
  color: (internal value);
  cursor: pointer;
  text-decoration: underline;
}
```

9. `button`

   Fərqli brauzerlər button üçün fərqli ilkin dəyərlərdən istifadə edir. Məsələn, Chrome brauzerindəki button'un ilkin dəyərləri aşağıdakı kimidir.

```css
button {
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  margin: 0em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
```

10. `ul`

```css
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
```

11. `li`

```css
li {
  display: list-item;
}
```

12. `section`

```css
section {
  display: block;
}
```

13. `img`

```css
img {
  display: inline-block;
}
```

14. `span`

    İlkin CSS xüsusiyyəti yoxdur.

    <br>

## :heavy_check_mark: Sual 5

#### CSS-in `filter` xüsusiyyəti nədir və necə istifadə olunur?

CSS `filter` xüsusiyyəti CSS3 ilə birlikdə gəlib və HTML elementlərinə (əsasən şəkillərə) fotoşopa bənzəyən vizual effektlər (paqlaqlıq, bulanıqlıq, şəffaflıq və s. kimi) tətbiq edir. Beləliklə, tək sətir CSS kodu ilə şəkilləri daha gözəl hala gətirə bilirik.

Məsələn, grayscale effektini yoxlayaq.

![filter grayscale effekti](https://user-images.githubusercontent.com/86655646/136672356-9f6aa1b7-2c93-4a48-bad4-9dc895badbee.gif)

<br>

Başqa filterləri də yoxlaya bilərik.

![css filter](https://user-images.githubusercontent.com/86655646/136672438-8f421b12-b5d8-466d-9d94-c05ae76e6de7.gif)

<br>

Birdən çox filteri aşağıdakı kimi bir-birinin ardınca yazmaq olar.

```css
img {
  filter: grayscale(0.4) blur(15px) contrast(150%) brightness(90%);
}
```

<br>

## :heavy_check_mark: Sual 6

#### CSS-də `text-indent` xüsusiyyəti nədir və nə zaman istifadə olunur?

Bu xüsusiyyət mətnlərin ilk sətrinin abzas məsafəsini (sətrin əvvəlindəki girinti) təyin edir. Aşağıdakı gifdən də gördüyünüz kimi abzas məsafəsini rahatlıqla `text-indent` ilə vermək olur.

<br>

![text-indent](https://user-images.githubusercontent.com/86655646/136673783-deffd2dd-5626-4159-be4d-8f40fc8791ab.gif)

<br>

## :heavy_check_mark: Sual 7

#### CSS-in `user-select` xüsusiyyəti nədir və nə zaman istifadə olunur?

Bu xüsusiyyət elementin mətninin seçilib-seçilməyəcəyini təyin edir. Veb brauzerlərdə bəzi mətnlərin üstünə iki dəfə basanda həmin mətn seçilir. Məsələn, `user-select` xüsusiyyəti bunun qarşısını almaq üçün istifadə oluna bilər.

```css
div {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 və IE 11 */
  user-select: none; /* Standart sintaksis */
}
```

Bu zaman div teqinin içində olan mətni seçə bilməyəcəksiniz. Məsələn, aşağıdakı kimi olmayacaq.<br>

![user-select](https://user-images.githubusercontent.com/86655646/136674113-8aac1daa-7b31-43d7-a98d-ea1e143f2c40.png)

<br>

## :heavy_check_mark: Sual 8

#### HTML teqlərinin bəzilərinin sonluğu var, bəzilərinin yoxdur. Bunun səbəbi nədir?

Belə teqlərə **"self-closing"** teqlər deyilir. Nümunə üçün `meta`, `link`, `br`, `img`, `hr`, `input`, `wbr` və s. kimi teqləri misal göstərmək olar. Bu teqlərin sonluğa ehtiyacı yoxdur, çünki məzmununa baxanda nə olduğu bəlli olur, yəni məzmunu bəlli olur. Ona görə də sonluq yazmağa ehtiyac qalmır. Məsələn, `div` teqini götürsək onun məzmunu bəlli deyil, yəni içində hər şey ola bilər, yazı da ola bilər, başqa müxtəlif teqlər də ola bilər, heç nə olmaya da bilər. Tutaq ki, içində yazı var və biz `div` teqinin sonluğunu yazmamışıq, yəni `</div>` yazmamışıq. Onda biz necə bilə-bilərik ki, bu yazı harada bitəcək və s. Sonunu, bitdiyini bildirmək üçün `div` teqini bağlamalıyıq. İnspect edib koda baxanda da rahatlıq olur o zaman (başlanğıcını və sonunu biləndə). Misal üçün `br` teqində isə belə deyil, onu bağlasaq da eyni funksiyanı yerinə yetirir, bağlamasaq da, baxan kimi bilinir ki, `br` teqi nə üçün yazılıb və s. `img` teqinin məzmunu bəllidir. Ona baxan kimi nə üçün səhifədə olduğunu bilmək olur. **"self-closing"** teqlər adətən səhifədə tək dayanır. Ümid edirəm ki, fikrimi düzgün ifadə edə bilmişəm.

<br>

## :heavy_check_mark: Sual 9

#### HTML `abbr` teqi nə üçün istifadə olunur?

`abbr` bir sözün və ya söz qruplarının qısaldılmış halını göstərmək üçün istifadə olunur. `title` atributunun köməyi ilə isə maus kursoru həmin sözün üstünə gələndə sözün açılışı görünür.

_Nümunə:_

![abbr teq](https://i.postimg.cc/0jbxQhnt/abbr.gif)

<br>

## :heavy_check_mark: Sual 10

#### `cite` teqindən nə üçün istifadə olunur?

`cite` teqi kitabın, filmin, şəklin, mahnının, şeirin və s. yaradıcı işin başlığını təyin etmək üçün istifadə olunur və həmin söz adətən italik yazı tipində yazılır. Məsələn, aşağıdakı nümunəyə nəzər salaq.

![cite teqi](https://user-images.githubusercontent.com/86655646/138767408-f9dfb5e2-4bdf-4eb8-af7c-3e28fcab1e00.png)

#### ⬆ [Yuxarıya qayıt](https://github.com/isbendiyarovanezrin/PragmatechFrontendProject/blob/master/Research.md#heavy_check_mark-sual-1)

## :heavy_check_mark: Sual 11

#### `address` teqindən nə üçün istifadə olunur?

`address` teqi məqalənin və ya sənədin müəllifi (sahibi) üçün əlaqə məlumatlarını müəyyən edir. Bu əlaqə məlumatlarına e-poçt ünvanı, URL, telefon nömrəsi və s. daxil ola bilər. Həmin sözlər adətən italik yazı tipində yazılır. Məsələn, aşağıdakı nümunəyə baxaq.

![address teqi](https://user-images.githubusercontent.com/86655646/138770823-69942173-7c3b-4ef5-be42-13c5a19eed50.png)

<br>

## :heavy_check_mark: Sual 12

#### `q` teqindən nə üçün istifadə olunur?

`q` teqi qısa sitatları yazmaq üçün istifadə olunur və bu zaman brauzerlər sitatın hər iki tərəfinə dırnaq işarəsi qoyur.

_Nümunə:_

![q teqinin istifadəsi](https://user-images.githubusercontent.com/86655646/138775635-c2d6f6df-5cb9-453b-8bd7-c6a53df28fa0.png)

<br>

## :heavy_check_mark: Sual 13

#### `blockquote` teqindən nə üçün istifadə olunur?

`blockquote` teqindən başqa mənbədən sitat gətirilən hissəni yazmaq üçün istifadə olunur. Brauzerlər adətən bu hissəni abzasdan yazdırırlar. Burada `cite` teqinin içində isə sitatın mənbəyinin URl-sini yazırıq.

_Nümunə:_

![blockquote teqi](https://user-images.githubusercontent.com/86655646/138810854-80fe69bf-fe06-46b0-b2bb-9d12c5258510.png)

<br>

## :heavy_check_mark: Sual 14

#### `mark` teqindən nə üçün istifadə olunur?

`mark` teqi mətnin bir hissəsini vurğulanmaq və ya işarələnmək üçün istifadə olunur. `mark` teqinin əsas məqsədi bu teqin içində yazılan sözü və ya cümləni sarı arxa fonla istifadəçiyə göstərməkdir.

_Nümunə:_

![mark teqi](https://user-images.githubusercontent.com/86655646/138814747-68775786-fbef-4e5d-8407-124150de47aa.png)

<br>

## :heavy_check_mark: Sual 15

#### `bdi` teqindən nə üçün istifadə olunur?

BDİ'nin açılışı Bi-Directional Isolation-dur. `bdi` teqi bir mətndən fərqli istiqamətdə başlayan mətni ayırır. Məsələn, ərəb dili sağdan sola yazılan bir dildir. Saytınızda ərəb dilində sağdan sola yazılan yazılar ola bilər. Dilin və sözün quruluşunu qorumaq üçün bu sözləri saytımızda istifadə etdiyimiz dil quruluşundan təcrid etməliyik. Bunun üçün isə həmin sözləri `bdi` teqinin içində yazmalıyıq.

_Nümunə:_

![bdi](https://user-images.githubusercontent.com/86655646/138816560-8d218900-1e73-4772-9da1-3e27de7094fa.png)

<br>

## :heavy_check_mark: Sual 16

#### `optgroup` teqindən nə üçün istifadə olunur?

`optgroup` teqi `select` (açılan siyahı) teqində əlaqəli seçimləri qruplaşdırmaq üçün istifadə olunur. Bu zaman `optgroup` teqinin içində `option` teqi yazılır. Uzun bir seçim siyahınız varsa, əlaqəli seçimləri qruplaşdırmaq istifadəçinin istədiyi seçimi tapmasını asanlaşdıra bilər.

_Nümunə:_

![optgroup teqi](https://user-images.githubusercontent.com/86655646/138837020-54b6b5da-fbea-476f-bc4d-d1d348f64fec.png)

<br>

## :heavy_check_mark: Sual 17

#### `::marker` selektoru necə istifadə olunur?

`::marker` selektoru siyahı elementlərinin qabağında olan işarələri müəyyən edir.

_Nümunə:_

<div align="center">
   <img width="400" src="https://user-images.githubusercontent.com/86655646/139129209-d403906e-81b8-4327-92d0-6521bcc748c1.png">
   <img width="400" src="https://user-images.githubusercontent.com/86655646/139129973-d64066b4-b8a1-4e61-b549-30a87e2a93f4.png">
</div>
   
<div align="center">
<img src="https://user-images.githubusercontent.com/86655646/139131028-b9b8a918-6dab-4603-9980-aa0dfc4e506d.png">
<img src="https://user-images.githubusercontent.com/86655646/139131421-0e24c94d-5e9e-4fcd-a506-d7edd717ce3b.png">
</div>

<br>

## :heavy_check_mark: Sual 18

#### `text-decoration-color` xüsusiyyəti nə işə yarayır?

`text-decoration-color` xüsusiyyəti `text-decoration` (məsələn, `text-decoration: underline` verildikdə mətnin altından xətt çəkilir) verilən mətndə xəttin rəngini təyin edir.

_Nümunə:_

<img width="400" src="https://user-images.githubusercontent.com/86655646/139156735-2da0a73a-7a4c-4259-ae7b-2bbd51860aa9.png">
<img width="400" src="https://user-images.githubusercontent.com/86655646/139156752-57b17231-128f-4c93-b992-4492aede397c.png">
<img width="400" src="https://user-images.githubusercontent.com/86655646/139156701-dd12624f-2275-480d-8e63-403032941d6c.png">

<br>

## :heavy_check_mark: Sual 19

#### JavaScriptdə `null` və `undefined` arasında hansı fərqlər var?

`null` dəyərin yoxluğunu ifadə edən JavaScriptə xas primitiv məlumat tipidir və `typeof` operatorundan istifadə edəndə `object` döndürür.

_Nümunə:_

```js
let testLet = null;
alert(testLet); // null göstərəcək
alert(typeof testLet); // object göstərəcək
```

`undefined` JavaScriptdə dəyişənin olduğunu, lakin helə də dəyər təyin edilmədiyini bildirir və `typeof` operatorundan istifadə etsək də `undefined` döndürür.

_Nümunə:_

```js
let testLet;
alert(testLet); // undefined göstərəcək
alert(typeof testLet); // undefined göstərəcək
```

Aşağıdakı qarşılaşdırmalara da göz gəzdirək.

```js
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
```

<br>

## :heavy_check_mark: Sual 20

#### `fieldset` və `legend` teqləri necə istifadə olunur?

`fieldset` formda əlaqəli elementləri qruplaşdırmaq üçün istifadə olunur, `legend` isə `fieldset` üçün başlıq təyin edir.

_Nümunə:_

![fieldset və legend teqləri](https://user-images.githubusercontent.com/86655646/139834818-4f0bd20b-7b6a-47c3-81dd-769f4a8de175.png)

#### ⬆ [Yuxarıya qayıt](https://github.com/isbendiyarovanezrin/PragmatechFrontendProject/blob/master/Research.md#heavy_check_mark-sual-1)

## :heavy_check_mark: Sual 21

#### Alqoritmin hansı növləri var? Nümunələr ilə izah et.

- #### Brute Force Algorithm

  "Brute Force Algorithm" alqoritmin ən sadə və ən əsas növlərindən biridir. "Brute Force Algorithm" növü qarşımıza bir problem çıxanda bu problemin həlli üçün ilk ağlımıza gələn yol, yanaşmadır. Misal olaraq telefonumuzun şifrəsi yadımızdan çıxıb, amma şifrənin 4 rəqəmli olduğunu bilirik. Bu halda çoxumuzun ilk sınayacağı rəqəm cütlüyü "1234" olacaq və belə-belə tapana kimi davam edəcək. Tapmaq üçün hər yolu sınaqdan keçirəcək. Beləliklə, biz bu kilidi aça bilmək üçün "Brute Force Algorithm" növündən istifadə etmiş oluruq. Bu növ biraz bahalıdır. Məsələn, bir massivdə 1-dən 8-ə qədər rəqəmlər var və biz bu massivdə 4 rəqəmini tapmaq istəyirik. Alqoritm ən başdan tək-tək rəqəmləri yoxlayaraq 4 rəqəmini rahatlıqla tapacaq, amma 10000 instaqram istifadəçisi arasından bir adı tapmaq lazım olanda gərək bütün adları bir-bir axtarsın. Ona görə də bu yol çətindir və vaxt itkisinə səbəb olur və s.

- #### Recursive Algorithm

  Bu tip alqoritmlər rekursiyaya (proqramın özü-özünü çağıra bilməsi) əsaslanır. Burada problemlər alt problemlərə (daha kiçik problemlərə) bölünür və o şəkildə həll olunur. Yəni problem bölünə bildiyi, parçalana bildiyi qədər bölünür və bu problem həll olunana qədər davam edir. Bu şəkildə bir çox problemi daha rahat həll etmək olar.

  _Nümunə:_

  ```js
  // faktorialın hesablanması
  // 1-dən müəyyən bir natural ədədə qədər olan ədədlərin hasilinə o ədədin faktorialı deyilir

  const num = 6;

  function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }

  document.write(factorial(num)); // 720
  ```

  _Daha çox nümunə:_

  - [Factorial](https://gist.github.com/isbendiyarovanezrin/9cd1ab28b215d2a832aecca7e9a9d74f)
  - [Fibonacci numbers](https://gist.github.com/isbendiyarovanezrin/198df3c1623a0536322a248de4af93f1)
  - [Sum of Numbers](https://gist.github.com/isbendiyarovanezrin/1315ea6bd7bbcee6310ed01d7d9e5456)

- #### Divide and Conquer Algorithm

  "Divide and Conquer Algorithm" növündə əsas ideya problemləri, məsələləri iki və ya daha çox oxşar, lakin daha sadə alt problemlərə bölmək, onları növbə ilə həll etmək və verilmiş məsələni həll etmək üçün onların hamısının həllərini (bütün alt problemlərin) birləşdirməkdən ibarətdir. Yəni 3 hissədən ibarətdir: bölmə, idarəetmə və birləşdirmə. Çətin problemlərin həlli üçün optimal bir variantdır.

  _Nümunə:_

  Siyahını (38, 27, 43, 3, 9, 82, 10) artan ardıcıllıqla çeşidləmək üçün "Divide and Conquer" yanaşması.

  [<img width="50%" src="https://user-images.githubusercontent.com/86655646/150655523-143c1080-e953-481d-beaf-01dfc55a95be.png">](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

  _Daha çox nümunə:_

  - [Binary Search Algorithm](https://gist.github.com/isbendiyarovanezrin/1e3b16045ea1e960888f694b2fe055e7)
  - [Fibonacci Numbers](https://gist.github.com/isbendiyarovanezrin/fe165710a708414ec9579c0459adbf62)
  - [Calculate pow(x, n)](https://gist.github.com/isbendiyarovanezrin/616fe82e6540dd4e3a57586cb5577631)

- #### Dynamic Programming Algorithms

  Alqoritmin bu növü "memoization technique" olaraq da bilinir, çünki burada ideya əvvəllər hesablanmış bir problemin nəticəsini təkrar-təkrar hesablamamaq üçün saxlamaqdan ibarətdir. Dynamic Programming'də problemi daha kiçik alt problemlərə bölüb nəticəni gələcəkdə istifadə üçün saxlamaq lazımdır. Buna misal olaraq faktorialın hesablanmasını göstərə bilərik. Məsələn, alqoritm 20 faktorialı hesabladı və biz bu zaman 5 faktorialın neçə olduğunu, 9 faktorialın neçə olduğunu və s. bilmiş oluruq. Bunları saxlasaq biz yenidən 30 faktorialı hesablamaq istəyəndə 0-dan başlamırıq, 20 faktoriala qədər olan hissəni saxladığımız üçün çox rahat tapırıq və sonrası üçün çalışırıq.

  > Those who cannot remember the past are condemned to repeat it. -Dynamic Programming

- #### Greedy Algorithm

  Bu alqoritmin məqsədi özünə ən doğru gələn variantı seçməkdir. Əvvəllər qəbul edilmiş seçimləri nəzərə almır. Bunu bir misal üstündə daha yaxşı izah etmək olar. Məsələn, bir balonumuz var və bu balon 150 litr süt tutur. Hər biri ayrı balonda olan 100 litr, 80 litr, 40 litr, 30 litr, 20 litr süt aldıq. Balonumuzu bunlarla doldurmalı olsaq alqoritm ilk olaraq 100 litrlik sütə doğru gedəcək, çünki ona ən doğru seçim bu kimi gələcək. Adından da bəlli olduğu kimi acgözdür və hansı ən çoxdursa ona tərəf gedir. Daha sonra 40 litri alır (etdiyi seçimlər nəticəsində balonun 10 litri boş qalacaq). Bu ən doğru seçim idi? Təbii ki, yox. Bu alqoritm növü hər zaman ən doğru seçimi etmir. Ona görə də istifadə edərkən diqqətli olmaq lazımdır. Bu misalda ən doğru seçim "80 litr + 40 litr + 30 litr" idi.

- #### Backtracking Algorithm
  Bu alqoritm növünün ən aşkar özəlliyi bir problem həll edərkən bütün ehtimalları sınayır. Alqoritm bütün ehtimalları sınayır və ən uyğununu seçir. Buna misal gətirəcək olsam, məsələn, bir qutumuz var və bir çox əşyamız var. Qutuya qoya bildiyimiz qədər əşya qoymağa çalışmalıyıq, amma sadəcə 2 ayı kuklası, 3 dovşan kuklası və 1 oyuncaq maşın sığışır. Alqoritm bütün əşyaları qutuya qoyub yoxlayacaq və sonda ən yaxşı yolu tapacaq. Yəni qutuya sığışan əşyaları digərlərinin arasından seçib qutuya qoyacaq.
