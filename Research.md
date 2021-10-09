## :heavy_check_mark: Sual 1

#### `em` və `rem` ölçüləndirmə dəyərləri arasında hansı fərqlər var?<br>

Responsiv saytlar üçün biz `px`-dən yox, `em` və `rem`-dən istifadə etməliyik. Çünki `px` ölçü vahidindən istifadə edərkən media sorğuları yazanda `px`-dən istifadə etdiyimiz çox teqə yenidən ölçü verməli oluruq, amma `em` və `rem` ilə sadəcə `body` ya da `html` teqinə ölçü verməyimiz bəs edir. `em` ölçü vahidi `body` teqinə verdiyimiz şrift ölçüsünü əsas götürür. Yəni əgər ölçü vermişiksə. `Body` teqinə şrift ölçüsü verməmişiksə özünün valideyn elementinin şrift ölçüsünü əsas götürür. Məsələn, html-də `span` teqi `div` teqinin (`div` teqinə 10px şrift ölçüsü verək) içində yazılıbsa, `span` teqi (`span` teqinə 3em şrift ölçüsü verək) valideyn elementinin (yəni `div` teqinin) şrift ölçüsünü əsas götürəcək (beləliklə, `span` teqinin şrift ölçüsü 30px olacaq (3em = 3 x 10px)).<br>
_Nümunə:_

```css
body {
  font-size: 20px;
}

p {
  font-size: 2em; /* 2em = 2 x 20px = 40px */
}
```

2em mövcud şriftin 2 qatı mənasına gəlir. Burada `p` teqinin fontu 40px olacaq.

_Başqa bir nümunəyə baxaq:_

```css
h4 {
  font-size: 11px;
  padding-bottom: 3em; /* 3em = 3 x 11px = 33px */
}
```

Burada `body` teqinə şrift ölçüsü verilmədiyi üçün `em` `h4`-ə verdiyimiz ölçünü əsas götürür.

`rem` isə `body` teqinə yox, `html` teqinə verdiyimiz ölçünü əsas götürür. Amma tək fərqi ondadır ki, `em` teqi kimi özünün valideyn elementinin dəyərini götürmür, yalnız html teqinin (root) ölçüsünü əsas götürür.

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

_Qeyd:_ İlkin olaraq `html` və `body` teqlərinin ölçüsü 16px-dir. Yəni heç bir dəyər verməsək bu ölçünü əsas götürəcək (1em = 16px, 1rem = 16px).
<br>
<br>

## :heavy_check_mark: Sual 2

#### `Background-origin` və `background-clip` xassələri aralarında hansı fərqlər var?<br>

Qısa olaraq desək `background-origin` `background-image` ilə təyin olunan fon şəklinin haradan başlayacağını təyin edir. İlkin dəyəri `padding-box`-dur. `Background-clip` xassəsi isə fon şəklinin və ya fon rənginin (`background-origin` fon rənginə təsir etmir) həm haradan başlayacağını, həm də harada bitəcəyini təyin edir. İlkin dəyəri `border-box`-dur.
<br>
<br>

## :heavy_check_mark: Sual 3

#### `::selection` selektorundan harada istifadə olunur?<br>

`::selection` selektoru istifadəçi saytdakı hansısa elementi seçərkən həmin elementin necə görünəcəyini təyin edir. Bir neçə CSS parametri tətbiq edə bilir: `::selection` selektor: `color`, `background`, `cursor` və `outline`.<br>
_Məsələn:_

```css
::selection {
  color: black;
  background: yellow;
}
```

Bu zaman istifadəçinin seçdiyi mətn (kopyalamaq üçün və s.) sarı arxa fonlu qara yazı olacaq (əgər mətn seçibsə).
<br>
<br>

## :heavy_check_mark: Sual 4

#### `h1` - `h6`, `div`, `a`, `button`, `ul`, `li`, `section`, `img`, `span` teqlərinin ilkin CSS xüsusiyyətləri nələrdir?<br>

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

4.  `h4` <br>
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

9. `button` <br>
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

14. `span` <br>
    İlkin CSS xüsusiyyəti yoxdur.
    <br>
    <br>

## :heavy_check_mark: Sual 5

#### CSS-in `filter` xüsusiyyəti nədir və necə istifadə olunur?<br>

CSS `filter` xüsusiyyəti CSS3 ilə birlikdə gəlib və HTML elementlərinə (əsasən şəkillərə) fotoşopa bənzəyən vizual effektlər (paqlaqlıq, bulanıqlıq, şəffaflıq və s. kimi) tətbiq edir. Beləliklə, tək sətir CSS kodu ilə şəkilləri daha gözəl hala gətirə bilirik. Məsələn, grayscale effektini yoxlayaq.
<br><br>
![filter grayscale effekti](https://user-images.githubusercontent.com/86655646/136672356-9f6aa1b7-2c93-4a48-bad4-9dc895badbee.gif)
<br><br>
Başqa filterləri də yoxlaya bilərik.
<br><br>
![css filter](https://user-images.githubusercontent.com/86655646/136672438-8f421b12-b5d8-466d-9d94-c05ae76e6de7.gif)
<br><br>
Birdən çox filteri aşağıdakı kimi bir-birinin ardınca yazmaq olar.

```css
img {
  filter: grayscale(0.4) blur(15px) contrast(150%) brightness(90%);
}
```

<br>

## :heavy_check_mark: Sual 6

#### CSS-də `text-indent` xüsusiyyəti nədir və nə zaman istifadə olunur?<br>

Bu xüsusiyyət mətnlərin ilk sətrinin abzas məsafəsini (sətrin əvvəlindəki girinti) təyin edir. Aşağıdakı gifdən də gördüyünüz kimi abzas məsafəsini rahatlıqla `text-indent` ilə vermək olur.
<br><br>
![text-indent](https://user-images.githubusercontent.com/86655646/136673783-deffd2dd-5626-4159-be4d-8f40fc8791ab.gif)
<br>
<br>

## :heavy_check_mark: Sual 7

#### CSS-in `user-select` xüsusiyyəti nədir və nə zaman istifadə olunur?<br>

Bu xüsusiyyət elementin mətninin seçilib-seçilməyəcəyini təyin edir. Veb brauzerlərdə bəzi mətnlərin üstünə iki dəfə basanda həmin mətn seçilir. Məsələn, `user-select` xüsusiyyəti bunun qarşısını almaq üçün istifadə oluna bilər.

```css
div {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 və IE 11 */
  user-select: none; /* Standart sintaksis */
}
```

Bu zaman div teqinin içində olan mətni seçə bilməyəcəksiniz. Məsələn, aşağıdakı kimi olmayacaq.<br><br>
![user-select](https://user-images.githubusercontent.com/86655646/136674113-8aac1daa-7b31-43d7-a98d-ea1e143f2c40.png)
