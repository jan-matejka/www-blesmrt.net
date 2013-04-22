#! /usr/bin/env python
# -*- coding: utf-8 -*-

import logging
log = logging.getLogger(__name__)

from os.path import abspath, dirname, join
from jinja2 import Environment, FileSystemLoader, Template


BASE_CTX = { 'MEDIA_URL': '/media', }

class PageInterface(object):
    def get_content(self):
        raise NotImplementedError

    def get_title(self):
        raise NotImplementedError

class Page(object):
    def __init__(self, title, content):
        self._title = title
        self._content = content

    def get_content(self):
        template = Template(self._content)
        return template.render(**BASE_CTX)

    def get_title(self):
        return self._title

class Section(Page):
    pass

class Fenomen(PageInterface):
    def get_title(self):
        return u"Fenomén Blésmrt"

    def get_1(self):
        return u"""
        <span style="font-family:verdana,sans-serif">Blésmrt je kulturně-politický fenomén, který zasáhl stojaté vlny tuzemské popkultury počátkem roku 2003.
        </span></p>
        <p style="font-family:verdana,sans-serif">
        Za krátkou dobu své existence se mu podařilo značně rozšířit, a to především na Barrandově a jeho okolí. Samotný výraz "blésmrt" vznikl postupným spojením slova smrt, které bylo již delší dobu předtím mnohými subjekty používáno ve významu zhodnocení nějaké konkrétní nepříznivé situace nebo stavu. Slovo "blé" je potom citoslovce smrti (vysvětlení viz skeč "Art of Acting" od Mr. Beana). Po krátké době krystalizace se tato dvě slova spojila v dokonalý celek, který se vzhledem ke své libozvučnosti rázem začal prosazovat v mnohem širším měřítku.<br>
        </p>
        <p style="font-family:verdana,sans-serif">
        Dnes je slovo blésmrt zcela běžně používáno i jako oslovení, pozdrav a náhrada většiny běžně používaných podstatných jmen. Skalní příznivci s ním dále nahrazují i mnohá slovesa. Ti nejskalnější potom vyslovují "blésmrt" i mimo jakékoliv věty, pouze v čisté snaze uvolnit vnitřní přetlak a nevyjít ze cviku. Mnohdy tak činí i ze spaní. Tito posledně jmenovají již dosáhli stavu, který je moderní psychiatrií definován jako "chronická blésmrt". Předstupněm je potom stav, definovaný jako "akutní blésmrt", který ovšem může zcela odeznít bez dalších následků. Cílem skalních příznivců je však dosáhnout finálního stavu osvícení, jenž se nazývá "totální blésmrt". Dosud se nikomu tohoto stavu nepodařilo dosáhnout a v současné době převažují pouze různě intenzivní formy chronické blésmrti.<br>
        </p>
        <p style="font-family:verdana,sans-serif">
        Základní vlastností blésmrti je to, že je trojitá. Někdy až příliš. Trojitou blésmrt nazýváme zkráceně trésmrt. Zařazením trésmrti za blésmrt vzniká postupka, kterou je možné dále rozvíjet. Například: Blésmrt-trojitá-s mátovou omáčkou-mnohočetná apod.<br>
        </p>
        <p style="font-family:verdana,sans-serif">
        Blésmrt má i svojí hymnu, která je odvozena od známé písně "Deutschland (dojčland), Deutschland über alles", kde se ústřední objekt nahradil slovem "blößmrt", přičemž melodie zůstává stejná. Logo "blésmrt" potom vychází ze známého loga AC/DC, užívaného v elektrotechnice. Zde však znak proudu reprezentuje ostře psané písmeno "S". Toto logo bylo úspěšně registrováno jako ochranná známka a již probíhá vyjednávání s managementem jisté nejmenované australské rockové skupiny o zaplacení poplatků z používání jejich loga.<br>
        </p>
        """

    def get_2(self):
        return u"""
        <p style="font-family:verdana,sans-serif">
        Zhudebnění blésmrti se dočkalo i své pop-music podoby, zejména převzetím melodie písně Můj čas ze seriálu Sanitka. Text nemůže být samozřejmě jiný než "Blésmrt, je pohopouze trojitá, trésmrt nebude nikdy dvojitá..."
        </p>
        <p style="font-family:verdana,sans-serif">
        Vzápětí poté byl zformován základ nového hudebního stylu, takzvaný blésmrtmetal. Narozdíl od svého předobrazu, kterým je deathmetal (česky smrtkov), se blésmrtmetal vyznačuje několika jemu zcela vlastními atributy. Vycházíme-li ze základní premisy o trojitosti blésmrti, dostaneme se k závěru, že optimální počet hudebníků pro blésmrtmetal je tři, hlavní nástroj je triangl, základní harmonie je tercie a v rytmice převládají trioly. Ryzí blésmrtmetalové těleso se tedy sestává z tria trianglistů hrajících trioly v terciích.
        </p>
        <p style="font-family:verdana,sans-serif">

        Vyslechnout rozhovor příslušníků tohoto hnutí může být pro nezasvěceného člověka bizarním zážitkem, nicméně tento obvykle záhy zjistí, že věty, z nichž často více než 50% tvoří slovo "blésmrt", nejsou o nic méně srozumitelné, než spisovná čeština, a navíc vyjadřují podstatu věci mnohem přesněji. Z tohoto pohledu vznikly další iniciativy, které mají za cíl odvodit další, obdobně libozvučná slova jako náhrady dalších slovních druhů, zejména citoslovců a spojek.
        </p>
        <p style="font-family:verdana,sans-serif">
        Jedním z nejvýznamějších takto vzniknuvších proudů je TRMS a to především pro jeho výrazně perkusivní charakter. Jeho příznivci se sdružují pod hlavičkou "Sdružení rodičů a přátel TRMS". Hymna ani logo zatím nebylo stanoveno.
        </p>
        <p style="font-family:verdana,sans-serif">
        Nejmladším produktem hnutí je potom "Kult velkého černého pavouka co chodí v rohu", který čeká nepochybně velmi světlá budoucnost.
        </p>
        <p style="font-family:verdana,sans-serif">
        Klíčová slova: blésmrt, bleesmrt, bleedsmrt, trmsélb, trms2élb, trésmrt, treesmrt, smrtblé, treesmrk, boéfmut, trms, blößmrt, trößmrt, BŁ€$MRT, ALERORT (t9), ALESORT (t9), blézmrd, bl3smrt
        """



def main():
    main = Page(u"Blésmrt.net","")

    lamy = Section(u"", u"""
        <p class="lamy">
            Nechcete být<strong> Lamy</strong>, které mají <strong>i na
            vizitkách</strong> pepicek@seznam.cz?
        </p>

        <p class="poridte">Pořiďte si <strong>email</strong>,<strong>
            jabber</strong> a dokonce i <strong>webový kancelářský
            balík</strong> na doméně která o vás dokáže říct
        </p>

        <p class="neboji">
            <h2>Tenhle člověk se ničeho nebojí</h2>
        </p>

        <p class="">
            <h1>Připojte se k Blesmrt.net již dnes!</h1>
        </p>
    """)

    jabber = Section("Jabber", u"""
    <p>
        <a href="https://blesmrt.net:5281/register/">Registrace</a><br>

        Nastavení:
        <dl>
            <dt>porty XMPP</dt>
            <dd>5222</dd>
            <dt>legacy SSL</dt>
            <dd>5223 a 443</dd>
            <dt>http binding (BOSH)</dt>
            <dd>http://webchat.blesmrt.net/http-bind/</dd>
            <dt>polling</dt>
            <dd>http://webchat.blesmrt.net/http-poll/</dd>
            <dt>filetransfer proxy</dt>
            <dd>proxy.blesmrt.net</dd>
        </dl>
    </p>
    """)

    gapps = Section("Google Apps", u"""
    <p>
        registraci provádíme my<br>
        <span id="admini"> — krutopřísný admini.</span>
    </p>

    <p>
        Napiš tvoje
            <ul>
                <li>Jméno</li>
                <li>Příjmení</li>
                <li>login na blesmrt.net</li>
                <li>a současný email</li>
            </ul>
        <a href="mailto:blupix@blesmrt.net">BluPixovi</a> nebo <a
        href="mailto:lenny@blesmrt.net">Lennymu</a>
    </p>

    <p>
        Do 42 dní ti přijde email s přihlašovacími údaji a jednorázovým heslem.
        Pak už budeš krutopřísnej  jako My.
    </p>

    <p>Poznámka: je mi jedno co tam napíšeš za údaje, ale na hromadě míst budete
    vidět jako "Jméno Příjmení".</p>
        """)


    pristup = Section(u"Přístup ke službám", u"""
    <p>
        <dl>
            <dt>e-mail</dt>
            <dd><a href="http://mail.blesmrt.net/" rel="nofollow">http://mail.blesmrt.net</a></dd>

            <dt>google docs</dt>
            <dd><a href="http://docs.blesmrt.net/" rel="nofollow">http://docs.blesmrt.net</a></dd>

            <dt>kalendář</dt>
            <dd><a href="http://calendar.blesmrt.net/" rel="nofollow">http://calendar.blesmrt.net</a></dd>

            <dt>sites</dt>
            <dd> <a href="http://sites.blesmrt.net/" rel="nofollow">http://sites.blesmrt.net/</a></dd>

            <dt>startpage</dt>
            <dd> <a href="http://start.blesmrt.net/" rel="nofollow">http://start.blesmrt.net<br></a></dd>

            <dt>dashboard</dt>
            <dd> <a href="http://google.com/a/blesmrt.net/">http://google.com/a/blesmrt.net/</a></dd>

            <dt>web jabber client</dt>
            <dd><a href="http://webchat.blesmrt.net/jwchat/">http://webchat.blesmrt.net/jwchat/</a><br>
                <a href="http://webchat.blesmrt.net/ijab/">http://webchat.blesmrt.net/ijab/</a></dd>
        </dl>
    </p>
    """)

    prispejte = Section(u"Přispějte", u"""
    Pro chod tohoto serveru jsou potřeba, jak už určitě tušíte peníze.

Proto přispějte, pokud máte z čeho (láhve alkoholu jsou taktéž příjímány)

<div style="display:block;text-align:left">
<a href="http://blesmrt.eu/donate.html" rel="nofollow" target="_blank"><img
border="0" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" style="margin:5px 10px 0pt 0pt;display:inline;float:left"></a> nebo na účet <b>670100-2200377805/6210</b>, <b>VS: 2537678</b>
</div>
    """)

    fenomen = Fenomen()
    ctx = {
        'main': main,
        'lamy': lamy,
        'srv': [ jabber, gapps, pristup ],
        'prispejte': prispejte,
        'fenomen': fenomen,
    }

    ctx.update(BASE_CTX)

    loader = FileSystemLoader(join(abspath(dirname(__file__)), 'templates'))
    env = Environment(loader=loader)
    tpl = env.get_template('main.html')

    index = open("./build/index.html", "w")
    index.write(tpl.render(**ctx).encode("utf-8"))
    index.close()

if __name__ == '__main__':
    main()
