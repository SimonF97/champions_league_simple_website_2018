function Pokaz()
{
    if(document.getElementById('pucharyKluby').checked)
    {
        document.getElementById('tytul1').innerHTML="Drużyna";
        document.getElementById('tytul2').innerHTML="Kraj";
        document.getElementById('tytul3').innerHTML="Ilość tytułów";
        document.getElementById('tytul4').innerHTML="Lata wygranych";
        
        document.getElementById('w1k1').innerHTML="Real Madryt";
        document.getElementById('w1k2').innerHTML="Hiszpania";
        document.getElementById('w1k3').innerHTML="13";
        document.getElementById('w1k4').innerHTML="1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018";
        
        document.getElementById('w2k1').innerHTML="AC Milan";
        document.getElementById('w2k2').innerHTML="Włochy";
        document.getElementById('w2k3').innerHTML="7";
        document.getElementById('w2k4').innerHTML="1963, 1969, 1989, 1990, 1994, 2003, 2007";
        
        document.getElementById('w3k1').innerHTML="Bayern Monachium";
        document.getElementById('w3k2').innerHTML="Niemcy";
        document.getElementById('w3k3').innerHTML="5";
        document.getElementById('w3k4').innerHTML="1974, 1975, 1976, 2001, 2013";
        
        document.getElementById('w4k1').innerHTML="FC Barcelona";
        document.getElementById('w4k2').innerHTML="Hiszpania";
        document.getElementById('w4k3').innerHTML="5";
        document.getElementById('w4k4').innerHTML="1992, 2006, 2009, 2011, 2015";
        
        document.getElementById('w5k1').innerHTML="Liverpool F. C.";
        document.getElementById('w5k2').innerHTML="Anglia";
        document.getElementById('w5k3').innerHTML="5";
        document.getElementById('w5k4').innerHTML="1977, 1978, 1981, 1984, 2005";
        
        document.getElementById('w6k1').innerHTML="Ajax Amsterdam";
        document.getElementById('w6k2').innerHTML="Holandia";
        document.getElementById('w6k3').innerHTML="4";
        document.getElementById('w6k4').innerHTML="1971, 1972, 1973, 1995";
        
        document.getElementById('w7k1').innerHTML="Inter Mediolan";
        document.getElementById('w7k2').innerHTML="Włochy";
        document.getElementById('w7k3').innerHTML="3";
        document.getElementById('w7k4').innerHTML="1964, 1965, 2010";
        
        document.getElementById('w8k1').innerHTML="Manchester United";
        document.getElementById('w8k2').innerHTML="Anglia";
        document.getElementById('w8k3').innerHTML="3";
        document.getElementById('w8k4').innerHTML="1968, 1999, 2008";
        
        document.getElementById('w9k1').innerHTML="Juventus Turyn";
        document.getElementById('w9k2').innerHTML="Włochy";
        document.getElementById('w9k3').innerHTML="2";
        document.getElementById('w9k4').innerHTML="1985, 1996";
        
        document.getElementById('w10k1').innerHTML="Benfica Lizbona";
        document.getElementById('w10k2').innerHTML="Portugalia";
        document.getElementById('w10k3').innerHTML="2";
        document.getElementById('w10k4').innerHTML="1961, 1962";
        
        document.getElementById('w11k1').innerHTML="Nottingham Forest";
        document.getElementById('w11k2').innerHTML="Anglia";
        document.getElementById('w11k3').innerHTML="2";
        document.getElementById('w11k4').innerHTML="1979, 1980";
        
        document.getElementById('w12k1').innerHTML="FC Porto";
        document.getElementById('w12k2').innerHTML="Portugalia";
        document.getElementById('w12k3').innerHTML="2";
        document.getElementById('w12k4').innerHTML="1987, 2004";
        
        document.getElementById('w13k1').innerHTML="Celtic F. C.";
        document.getElementById('w13k2').innerHTML="Szkocja";
        document.getElementById('w13k3').innerHTML="1";
        document.getElementById('w13k4').innerHTML="1967";
        
        document.getElementById('w14k1').innerHTML="Hamburger SV";
        document.getElementById('w14k2').innerHTML="Niemcy";
        document.getElementById('w14k3').innerHTML="1";
        document.getElementById('w14k4').innerHTML="1983";
        
        document.getElementById('w15k1').innerHTML="Steaua Bukareszt";
        document.getElementById('w15k2').innerHTML="Rumunia";
        document.getElementById('w15k3').innerHTML="1";
        document.getElementById('w15k4').innerHTML="1986";
        
        document.getElementById('w16k1').innerHTML="Olympique Marsylia";
        document.getElementById('w16k2').innerHTML="Francja";
        document.getElementById('w16k3').innerHTML="1";
        document.getElementById('w16k4').innerHTML="1993";
        
        document.getElementById('w17k1').innerHTML="Borussia Dortmund";
        document.getElementById('w17k2').innerHTML="Niemcy";
        document.getElementById('w17k3').innerHTML="1";
        document.getElementById('w17k4').innerHTML="1997";
        
        document.getElementById('w18k1').innerHTML="Chelsea F.C.";
        document.getElementById('w18k2').innerHTML="Anglia";
        document.getElementById('w18k3').innerHTML="1";
        document.getElementById('w18k4').innerHTML="2012";
        
        document.getElementById('w19k1').innerHTML="Feyenoord Rotterdam";
        document.getElementById('w19k2').innerHTML="Holandia";
        document.getElementById('w19k3').innerHTML="1";
        document.getElementById('w19k4').innerHTML="1970";
        
        document.getElementById('w20k1').innerHTML="Aston Villa";
        document.getElementById('w20k2').innerHTML="Anglia";
        document.getElementById('w20k3').innerHTML="1";
        document.getElementById('w20k4').innerHTML="1982";
        
        document.getElementById('w21k1').innerHTML="PSV Eindhoven";
        document.getElementById('w21k2').innerHTML="Holandia";
        document.getElementById('w21k3').innerHTML="1";
        document.getElementById('w21k4').innerHTML="1988";
        
        document.getElementById('w22k1').innerHTML="Crvena Zvezda Belgrad";
        document.getElementById('w22k2').innerHTML="Serbia";
        document.getElementById('w22k3').innerHTML="1";
        document.getElementById('w22k4').innerHTML="1991";
        
        document.getElementById('w23k1').innerHTML="";
        document.getElementById('w23k2').innerHTML="";
        document.getElementById('w23k3').innerHTML="";
        document.getElementById('w23k4').innerHTML="";
        
        document.getElementById('w24k1').innerHTML="";
        document.getElementById('w24k2').innerHTML="";
        document.getElementById('w24k3').innerHTML="";
        document.getElementById('w24k4').innerHTML="";
    }
    
    else if(document.getElementById('pucharyZawodnicy').checked)
    {
        document.getElementById('tytul1').innerHTML="Zawodnik";
        document.getElementById('tytul2').innerHTML="Kraj";
        document.getElementById('tytul3').innerHTML="Ilość tytułów";
        document.getElementById('tytul4').innerHTML="Kluby";
        
        document.getElementById('w1k1').innerHTML="Paco Gento";
        document.getElementById('w1k2').innerHTML="Hiszpania";
        document.getElementById('w1k3').innerHTML="6";
        document.getElementById('w1k4').innerHTML="Real Madryt";
        
        document.getElementById('w2k1').innerHTML="Cristiano Ronaldo";
        document.getElementById('w2k2').innerHTML="Portugalia";
        document.getElementById('w2k3').innerHTML="5";
        document.getElementById('w2k4').innerHTML="Manchester United, Real Madryt";
        
        document.getElementById('w3k1').innerHTML="Paolo Maldini";
        document.getElementById('w3k2').innerHTML="Włochy";
        document.getElementById('w3k3').innerHTML="5";
        document.getElementById('w3k4').innerHTML="AC Milan";
        
        document.getElementById('w4k1').innerHTML="Alessandro Costacurta";
        document.getElementById('w4k2').innerHTML="Włochy";
        document.getElementById('w4k3').innerHTML="5";
        document.getElementById('w4k4').innerHTML="AC Milan";
        
        document.getElementById('w5k1').innerHTML="Héctor Rial";
        document.getElementById('w5k2').innerHTML="Argentyna, Hiszpania";
        document.getElementById('w5k3').innerHTML="5";
        document.getElementById('w5k4').innerHTML="Real Madryt";
        
        document.getElementById('w6k1').innerHTML="Alfredo di Stéfano";
        document.getElementById('w6k2').innerHTML="Argentyna, Hiszpania";
        document.getElementById('w6k3').innerHTML="5";
        document.getElementById('w6k4').innerHTML="Real Madryt";
        
        document.getElementById('w7k1').innerHTML="Daniel Carvajal";
        document.getElementById('w7k2').innerHTML="Hiszpania";
        document.getElementById('w7k3').innerHTML="4";
        document.getElementById('w7k4').innerHTML="Real Madryt";
        
        document.getElementById('w8k1').innerHTML="Marcelo";
        document.getElementById('w8k2').innerHTML="Brazylia, Hiszpania";
        document.getElementById('w8k3').innerHTML="4";
        document.getElementById('w8k4').innerHTML="Real Madryt";
        
        document.getElementById('w9k1').innerHTML="Luka Modrić";
        document.getElementById('w9k2').innerHTML="Chorwacja";
        document.getElementById('w9k3').innerHTML="4";
        document.getElementById('w9k4').innerHTML="Real Madryt";
        
        document.getElementById('w10k1').innerHTML="Toni Kroos";
        document.getElementById('w10k2').innerHTML="Niemcy";
        document.getElementById('w10k3').innerHTML="4";
        document.getElementById('w10k4').innerHTML="Bayern Monachium, Real Madryt";
        
        document.getElementById('w11k1').innerHTML="Karim Benzema";
        document.getElementById('w11k2').innerHTML="Algieria, Francja";
        document.getElementById('w11k3').innerHTML="4";
        document.getElementById('w11k4').innerHTML="Real Madryt";
        
        document.getElementById('w12k1').innerHTML="Sergio Ramos";
        document.getElementById('w12k2').innerHTML="Hiszpania";
        document.getElementById('w12k3').innerHTML="4";
        document.getElementById('w12k4').innerHTML="Real Madryt";
        
        document.getElementById('w13k1').innerHTML="Raphaël Varane";
        document.getElementById('w13k2').innerHTML="Francja";
        document.getElementById('w13k3').innerHTML="4";
        document.getElementById('w13k4').innerHTML="Real Madryt";
        
        document.getElementById('w14k1').innerHTML="Casemiro";
        document.getElementById('w14k2').innerHTML="Brazylia";
        document.getElementById('w14k3').innerHTML="4";
        document.getElementById('w14k4').innerHTML="Real Madryt";
        
        document.getElementById('w15k1').innerHTML="Gareth Bale";
        document.getElementById('w15k2').innerHTML="Walia";
        document.getElementById('w15k3').innerHTML="4";
        document.getElementById('w15k4').innerHTML="Real Madryt";
        
        document.getElementById('w16k1').innerHTML="Nacho Fernández";
        document.getElementById('w16k2').innerHTML="Hiszpania";
        document.getElementById('w16k3').innerHTML="4";
        document.getElementById('w16k4').innerHTML="Real Madryt";
        
        document.getElementById('w17k1').innerHTML="Isco";
        document.getElementById('w17k2').innerHTML="Hiszpania";
        document.getElementById('w17k3').innerHTML="4";
        document.getElementById('w17k4').innerHTML="Real Madryt";
        
        document.getElementById('w18k1').innerHTML="Andrés Iniesta";
        document.getElementById('w18k2').innerHTML="Hiszpania";
        document.getElementById('w18k3').innerHTML="4";
        document.getElementById('w18k4').innerHTML="FC Barcelona";
        
        document.getElementById('w19k1').innerHTML="Xavi";
        document.getElementById('w19k2').innerHTML="Hiszpania";
        document.getElementById('w19k3').innerHTML="4";
        document.getElementById('w19k4').innerHTML="FC Barcelona";
        
        document.getElementById('w20k1').innerHTML="Lionel Messi";
        document.getElementById('w20k2').innerHTML="Argentyna";
        document.getElementById('w20k3').innerHTML="4";
        document.getElementById('w20k4').innerHTML="FC Barcelona";
        
        document.getElementById('w21k1').innerHTML="Gerard Piqué";
        document.getElementById('w21k2').innerHTML="Hiszpania";
        document.getElementById('w21k3').innerHTML="4";
        document.getElementById('w21k4').innerHTML="Manchester United, FC Barcelona";
        
        document.getElementById('w22k1').innerHTML="Clarence Seedorf";
        document.getElementById('w22k2').innerHTML="Surinam, Holandia";
        document.getElementById('w22k3').innerHTML="4";
        document.getElementById('w22k4').innerHTML="Ajax Amsterdam, Real Madryt, AC Milan";
        
        document.getElementById('w23k1').innerHTML="Phil Neal";
        document.getElementById('w23k2').innerHTML="Anglia";
        document.getElementById('w23k3').innerHTML="4";
        document.getElementById('w23k4').innerHTML="Liverpool F. C.";
        
        document.getElementById('w24k1').innerHTML="";
        document.getElementById('w24k2').innerHTML="";
        document.getElementById('w24k3').innerHTML="";
        document.getElementById('w24k4').innerHTML="";
    }
    
    else if(document.getElementById('strzelcy').checked)
    {
        document.getElementById('tytul1').innerHTML="Zawodnik";
        document.getElementById('tytul2').innerHTML="Drużyna";
        document.getElementById('tytul3').innerHTML="Bramki";
        document.getElementById('tytul4').innerHTML="Mecze";
        
        document.getElementById('w1k1').innerHTML="Cristiano Ronaldo";
        document.getElementById('w1k2').innerHTML="Manchester United, Real Madryt";
        document.getElementById('w1k3').innerHTML="120";
        document.getElementById('w1k4').innerHTML="153";
        
        document.getElementById('w2k1').innerHTML="Lionel Messi";
        document.getElementById('w2k2').innerHTML="FC Barcelona";
        document.getElementById('w2k3').innerHTML="100";
        document.getElementById('w2k4').innerHTML="125";
        
        document.getElementById('w3k1').innerHTML="Raúl";
        document.getElementById('w3k2').innerHTML="Real Madryt, FC Schalke 04";
        document.getElementById('w3k3').innerHTML="71";
        document.getElementById('w3k4').innerHTML="142";
        
        document.getElementById('w4k1').innerHTML="Ruud van Nistelrooy";
        document.getElementById('w4k2').innerHTML="PSV Eindhoven, Real Madryt, Manchester United";
        document.getElementById('w4k3').innerHTML="56";
        document.getElementById('w4k4').innerHTML="73";
        
        document.getElementById('w5k1').innerHTML="Karim Benzema";
        document.getElementById('w5k2').innerHTML="Olympique Lyon, Real Madryt";
        document.getElementById('w5k3').innerHTML="56";
        document.getElementById('w5k4').innerHTML="104";
        
        document.getElementById('w6k1').innerHTML="Thierry Henry";
        document.getElementById('w6k2').innerHTML="AS Monaco, Arsenal, FC Barcelona";
        document.getElementById('w6k3').innerHTML="50";
        document.getElementById('w6k4').innerHTML="112";
        
        document.getElementById('w7k1').innerHTML="Alfredo di Stéfano";
        document.getElementById('w7k2').innerHTML="Real Madryt";
        document.getElementById('w7k3').innerHTML="49";
        document.getElementById('w7k4').innerHTML="58";
        
        document.getElementById('w8k1').innerHTML="Andriy Shevchenko";
        document.getElementById('w8k2').innerHTML="Dynamo Kijów, AC Milan, Chelsea F. C.";
        document.getElementById('w8k3').innerHTML="48";
        document.getElementById('w8k4').innerHTML="100";
        
        document.getElementById('w9k1').innerHTML="Zlatan Ibrahimović";
        document.getElementById('w9k2').innerHTML="Ajax Amsterdam, Juventus Turyn, Inter Mediolan, FC Barcelona, AC Milan, FC Paris Saint-Germain";
        document.getElementById('w9k3').innerHTML="48";
        document.getElementById('w9k4').innerHTML="120";
        
        document.getElementById('w10k1').innerHTML="Eusébio";
        document.getElementById('w10k2').innerHTML="Benfica Lizbona";
        document.getElementById('w10k3').innerHTML="46";
        document.getElementById('w10k4').innerHTML="65";
        
        document.getElementById('w11k1').innerHTML="Filippo Inzaghi";
        document.getElementById('w11k2').innerHTML="AC Milan,, Juventus Turyn";
        document.getElementById('w11k3').innerHTML="46";
        document.getElementById('w11k4').innerHTML="81";
        
        document.getElementById('w12k1').innerHTML="Robert Lewnadowski";
        document.getElementById('w12k2').innerHTML="Borussia Dortmund, Bayern Monachium";
        document.getElementById('w12k3').innerHTML="45";
        document.getElementById('w12k4').innerHTML="72";
        
        document.getElementById('w13k1').innerHTML="Didier Drogba";
        document.getElementById('w13k2').innerHTML="Olympique Marsylia, Chelsea F. C., Galatasaray SK";
        document.getElementById('w13k3').innerHTML="44";
        document.getElementById('w13k4').innerHTML="92";
        
        document.getElementById('w14k1').innerHTML="Alessandro Del Piero";
        document.getElementById('w14k2').innerHTML="Juventus Turyn";
        document.getElementById('w14k3').innerHTML="42";
        document.getElementById('w14k4').innerHTML="90";
        
        document.getElementById('w15k1').innerHTML="Thomas Müller";
        document.getElementById('w15k2').innerHTML="Bayern Monachium";
        document.getElementById('w15k3').innerHTML="42";
        document.getElementById('w15k4').innerHTML="99";
        
        document.getElementById('w16k1').innerHTML="Ferenc Puskás";
        document.getElementById('w16k2').innerHTML="Budapest Honvéd FC, Real Madryt";
        document.getElementById('w16k3').innerHTML="36";
        document.getElementById('w16k4').innerHTML="41";
        
        document.getElementById('w17k1').innerHTML="Gerd Müller";
        document.getElementById('w17k2').innerHTML="Bayern Monachium";
        document.getElementById('w17k3').innerHTML="34";
        document.getElementById('w17k4').innerHTML="35";
        
        document.getElementById('w18k1').innerHTML="Fernando Morientes";
        document.getElementById('w18k2').innerHTML="Liverpool F. C., AS Monaco, Valencia CF, Real Madryt";
        document.getElementById('w18k3').innerHTML="33";
        document.getElementById('w18k4').innerHTML="93";
        
        document.getElementById('w19k1').innerHTML="Edinson Cavani";
        document.getElementById('w19k2').innerHTML="SSC Napoli, FC Paris Saint-Germain";
        document.getElementById('w19k3').innerHTML="32";
        document.getElementById('w19k4').innerHTML="52";
        
        document.getElementById('w20k1').innerHTML="Sergio Agüero";
        document.getElementById('w20k2').innerHTML="Atlético Madryt, Manchester City";
        document.getElementById('w20k3').innerHTML="31";
        document.getElementById('w20k4').innerHTML="61";
        
        document.getElementById('w21k1').innerHTML="Samuel Eto'o";
        document.getElementById('w21k2').innerHTML="RCD Mallorca, Chelsea F. C., Inter Mediolan, FC Barcelona";
        document.getElementById('w21k3').innerHTML="30";
        document.getElementById('w21k4').innerHTML="78";
        
        document.getElementById('w22k1').innerHTML="Wayne Rooney";
        document.getElementById('w22k2').innerHTML="Manchester United";
        document.getElementById('w22k3').innerHTML="30";
        document.getElementById('w22k4').innerHTML="85";
        
        document.getElementById('w23k1').innerHTML="Kaká";
        document.getElementById('w23k2').innerHTML="AC Milan, Real Madryt";
        document.getElementById('w23k3').innerHTML="30";
        document.getElementById('w23k4').innerHTML="86";

        document.getElementById('w24k1').innerHTML="Paco Gento";
        document.getElementById('w24k2').innerHTML="Real Madryt";
        document.getElementById('w24k3').innerHTML="30";
        document.getElementById('w24k4').innerHTML="89";
    }
}

