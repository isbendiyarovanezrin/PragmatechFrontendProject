## :heavy_check_mark: Sual 1

#### `em` və `rem` ölçüləndirmə dəyərləri arasında hansı fərqlər var?<br>

Responsiv saytlar üçün biz `px`-dən yox, `em` və `rem`-dən istifadə etməliyik. Çünki `px` ölçü vahidindən istifadə edərkən media sorğuları yazanda `px`-dən istifadə etdiyimiz çox teqə yenidən ölçü verməli oluruq, amma `em` və `rem` ilə sadəcə `body` ya da `html` teqinə ölçü verməyimiz bəs edir. `em` ölçü vahidi `body` teqinə verdiyimiz şrift ölçüsünü əsas götürür. Yəni əgər ölçü vermişiksə. `Body` teqinə şrift ölçüsü verməmişiksə özünün valideyn elementinin şrift ölçüsünü əsas götürür. Məsələn, html-də `span` teqi `div` teqinin (`div` teqinə 10px şrift ölçüsü verək) içində yazılıbsa, `span` teqi (`span` teqinə 3em şrift ölçüsü verək) valideyn elementinin (yəni `div` teqinin) şrift ölçüsünü əsas götürəcək (beləliklə, `span` teqinin şrift ölçüsü 30px olacaq (3em = 3 x 10px)).<br>
_Nümunə:_

```
body {
   font-size: 20px;
}

p {
   font-size: 2em;  /* 2em = 2 x 20px = 40px */
}
```

2em mövcud şriftin 2 qatı mənasına gəlir. Burada `p` teqinin fontu 40px olacaq.

_Başqa bir nümunəyə baxaq:_

```
h4 {
   font-size: 11px;
   padding-bottom: 3em; /* 3em = 3 x 11px = 33px */
}
```

Burada `body` teqinə şrift ölçüsü verilmədiyi üçün `em` `h4`-ə verdiyimiz ölçünü əsas götürür.

`rem` isə `body` teqinə yox, `html` teqinə verdiyimiz ölçünü əsas götürür. Amma tək fərqi ondadır ki, `em` teqi kimi özünün valideyn elementinin dəyərini götürmür, yalnız html teqinin (root) ölçüsünü əsas götürür.

_Nümunə:_

```
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

```
::selection {
  color: black;
  background: yellow;
}
```

Bu zaman istifadəçinin seçdiyi mətn (kopyalamaq üçün və s.) sarı arxa fonlu qara yazı olacaq (əgər mətn seçibsə).
