## :heavy_check_mark: Sual 1

#### `Justify-content` və `align-items` xüsusiyyətləri arasındakı fərq nədir?

"Justify-content" flex elementlərini horizontal (üfüqi) istiqamətdə yerləşdirir, "align-items" isə vertikal istiqamətdə (şaquli) yerləşdirir.

<br />

## :heavy_check_mark: Sual 2

#### `Box-sizing: border-box` xüsusiyyəti hansı hallarda istifadə olunur?

Box-sizing elementin ölçülərinə padding və borderin daxil olub olmayacağını təyin edir. "Box-sizing: border-box" genişlik dəyərinə padding və border dəyərlərini qatır.

<br />

## :heavy_check_mark: Sual 3

#### `Width: 100%` və `width: 100vw` arasındakı fərqlər nədir və nə vaxt istifadə olunması məsləhətdir?

"Vw (viewport width)" horizontal ekran ölçüsünün 100/1 hissəsinə bərabər olan ölçü vahididir. Brauzerin enliliyini bildirir və ondan asılıdır. "Width" isə bir elementin genişliliyini, enliliyini bildirir. Məsələn, `div {width: 2vw;}` versək (komputer ölçüləri: 1280x800) 2x1280/100=25,6px ölçüsündə (en olaraq) bir div əldə edirik, `div {width: 100vw;}` versək isə ekranın ölçüsündə (en olaraq) bir div əldə edirik. Bu div başqa divin içində də olsa eyni şey baş verəcək, amma həmin divə (divin içindəki divə) `width: 100%` versək o özündən bir üstəki divin (valideyninin) 100%-ni əhatə edəcək, ondan çölə çıxa bilməyəcək.

<br />

## :heavy_check_mark: Sual 4

#### `Cm`, `em`, `in`, `mm`, `pc`, `pt` və `px` CSS ölçüləndirmə vahidlərinin açıqlamalarını yazın.

- cm - santimetr (təxminən 37,8px)

- mm - millimetr (təxminən 3.78px)

- 1em - em ölçü vahidi özünün valideyn elementinin şrift ölçüsünü əsas götürür. Əgər valideyn elementinə şrift ölçüsü verilməyibsə onda `body` teqinə verdiyimiz şrift ölçüsünü əsas götürür. İlkin olaraq `body` teqinin şrift ölçüsü 16px-dir. Yəni heç bir dəyər verməsək bu ölçünü əsas götürəcək (1em = 16px).

- in (düym) / 1in = 96px = 2.54cm

- pc (pika) / 1pc = 12 pt

- pt (point) / 1pt = 1in’in 1/72’i

- px (piksel) / 1px = 1in’in 1/96’i

<br />

## :heavy_check_mark: Sual 5

#### CSS pseudo-class və pseudo-element nədir? Nümunələr ilə izah edin.

Pseudo-classlar saytda hər hansısa bir hadisə baş verdikdə elementin görünüşünü dəyişmək üçün istifadə olunur. Pseudo-classlar bir elementi fərqli siniflərə bölər (məsələn, link elementlərini active, visited və s. siniflərə bölər). Pseudo elementi isə bir elementi alt hissələrə bölər (məsələn, bir paraqrafın ilk hərfi, bir paraqrafın ilk sətri kimi).

_Nümunə:_

```css
/* pseudo-class */
a:visited {
  color: #00ff00;
}

/* pseudo-element */
p::first-letter {
  color: #fff;
}

p::first-line {
  color: #4d4b4b;
  font-size: 90px;
}
```

<br />

## :heavy_check_mark: Sual 6

#### `Meta` teqi nədir?

Meta teqləri axtarış sistemlərinə məlumat vermək üçün istifadə olunur. Saytın açıqlaması, saytın dili və s. kimi məlumatları axtarış sistemlərinə təqdim edir.

<br />

## :heavy_check_mark: Sual 7

#### `UTF-8` nə deməkdir?

UTF 8 bitlik bir Unicode simvol dəstəsi olub, "Unicode Transformation Format"ın qısaltması olaraq istifadə edilir. UTF-8 qısa olaraq desəm brauzerə müraciət edir ki, ə, ğ, ö, ü, ı hərflərini göstərsin.

<br />

## :heavy_check_mark: Sual 8

#### Dəyişən təyin edərkən hansı sintaktik qaydalara diqqət etməliyik?

Bütün JavaScript dəyişənləri bənzərsiz adlarla adlanmalıdır. Dəyişənlər kodlarımızı daha rahat başa düşmək üçün yazdığımız koda uyğun adlandırılmalıdır. Dəyişənləri adlandırarkən ingilis əlifbasından istifadə etməliyik. Dəyişənlər hərf, rəqəm, alt xətt, dollar işarəsi ilə başlaya bilər, amma rəqəmlə başlaya bilməz. Dəyişənləri adlandırarkən JavaScript tərəfindən istifadə olunan açar sözlərdən istifadə etmək olmaz.
