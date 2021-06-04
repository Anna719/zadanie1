# Popis:

Napísanie unit testu pre JavaScriptovú funkciu na porovnávanie dvoch telefónnych čísel. Jedná sa o funkciu, ktorej vstupné parametre sú dva stringy a návratovým typom je true/false. True v prípade, že telefónne čísla sú rovnaké, False, ak nie sú. Do testu je potrebné zahrnúť čo najviac možných prípadov.

## Inštalácia

Vytvorila som prázdny projekt Node.js v WebStorme a nainštalovala testovací framework [Jest](https://jestjs.io) pomocou príkazu:

```bash
npm install --save-dev jest
```

## Proces

Najprv som vytvorila súbor s názvom : uloha1.test.js.
Potom som začala pracovať na funkcii(pomocou Regex). Definícia JS funkcie:
```bash
phoneNrsAreEqual(nr1: String, nr2: String): Bool
```
Snažila som sa vytvoriť testy, ktoré vyskúšajú všetky možné variácie:
-  číslo s predvoľbou štátu/bez predvoľby;
-  s rôznymi náhodnými znakmi;
- s rôznou dĺžkou;
- prípady čísel s lomítkom a rôzne kombinácie;
- prípady pevných liniek;
- zahraničné čísla;
- prípad rovnakých čísel s predvoľbami rôznych štátov.



