function analyze(rootNode)
{
    var analyzeer = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    while (node = analyzeer.nextNode()) {
        nowreplace(node);
    }
}

function nowreplace(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(text)
{

    text = text.replace(/\brealDonaldTrump\b/gi, 'Hitler Sayings');
    text = text.replace(/\ban American businessman, politician, television personality, and candidate\b/gi, "a power-hungry fearmonger");
    text = text.replace(/\bMelania Trump\b/gi, 'Eva Braun');
    text = text.replace(/\bMelania Trump(?:(s)\b(')|s\b)/gi, "Eva Braun$2$1");
    text = text.replace(/\bTrump Organization\b/gi, 'Nazi Party');
    text = text.replace(/\bUnited States of America\b/gi, 'Germany');
    text = text.replace(/\bthe United States of America(?:(s)\b(')|s\b)/gi, "Germany$2$1");
    text = text.replace(/\bAmerican\b/gi, 'German');
    text = text.replace(/\bthe United States\b/gi, 'Germany');
    text = text.replace(/\bthe United States(?:(s)\b(')|s\b)/gi, "Germany$2$1");
    text = text.replace(/\bPresident\b/gi, 'Führer');
    text = text.replace(/\bPresident(?:(s)\b(')|s\b)/gi, "Führer$2$1");
    text = text.replace(/\bthe U.S.\b/gi, 'Germany');
    text = text.replace(/\bthe U.S.(?:(s)\b(')|s\b)/gi, "Germany$2$1");      
    text = text.replace(/\bTrump\b/gi, 'Hitler');
    text = text.replace(/\bTrump(?:(s)\b(')|s\b)/gi, "Hitler$2$1");
    text = text.replace(/\bAmerica\b/gi, 'Germany');
    text = text.replace(/\bAmerica(?:(s)\b(')|s\b)/gi, "Germany$2$1");
    text = text.replace(/\bAmerican(?:(s)\b(')|s\b)/gi, "German$2$1");
    text = text.replace(/\bGodwinsLaw\b/gi, 'Trumps Law');
    text = text.replace(/\bDonald\b/gi, 'Adolph');	
    text = text.replace(/\bCruz\b/gi, 'Stalin');
    text = text.replace(/\bCruz(?:(s)\b(')|s\b)/gi, "Stalin$2$1");
    text = text.replace(/\bTed Stalin\b/gi, 'Joseph Stalin');
    text = text.replace(/\bTed Stalin(?:(s)\b(')|s\b)/gi, "Joseph Stalin$2$1");
    text = text.replace(/\bMuslim(?:(s)\b(')|s\b)/gi, "Jew$2$1");
    text = text.replace(/\bNew York\b/gi, 'Austria');
    text = text.replace(/\bNew York(?:(s)\b(')|s\b)/gi, "Austria$2$1");
    text = text.replace(/\bbillionaire\b/gi, 'fascist');
    text = text.replace(/\bbillionaire(?:(s)\b(')|s\b)/gi, "fascist$2$1");
    text = text.replace(/\bOn the issues\b/gi, 'Quotes');
    text = text.replace(/\bThe right of self-defense doesn't stop at the end of your driveway. That's why I have a concealed carry permit and why tens of millions of German do too. That permit should be valid in all 50 states\b/gi, 'Make the lie big, make it simple, keep saying it, and eventually they will believe it');
    text = text.replace(/\bthere's nothing I would rather do than bring peace to Israel and its neighbors, generally. I think it serves no purpose to say you have a good guy and a bad guy.\b/gi, 'Make the lie big, make it simple, keep saying it, and eventually they will believe it');
    text = text.replace(/\bwaterboarding\b/gi, 'concentration camps');
    text = text.replace(/\bwaterboarding(?:(s)\b(')|s\b)/gi, "concentration camps$2$1");
    text = text.replace(/\bterrorists(?:(s)\b(')|s\b)/gi, "communists$2$1");
    text = text.replace(/\bterrorist(?:(s)\b(')|s\b)/gi, "communist$2$1");
    text = text.replace(/\bMexicans(?:(s)\b(')|s\b)/gi, "Poles$2$1");
    text = text.replace(/\bMexican(?:(s)\b(')|s\b)/gi, "Polish$2$1");
    text = text.replace(/\bIslamic\b/gi, 'Jewish');
    text = text.replace(/\bwall(?:(s)\b(')|s\b)/gi, "army$2$1");
    text = text.replace(/\bMexico\b/gi, 'Poland');
    text = text.replace(/\bIsrael\b/gi, 'Russia');
    text = text.replace(/\bnative and illegal immigrant(?:(s)\b(')|s\b)/gi, "Jews$2$1");
    text = text.replace(/\billegal immigrant(?:(s)\b(')|s\b)/gi, "Jews$2$1");
    text = text.replace(/\bimmigrant worker(?:(s)\b(')|s\b)/gi, "Jews$2$1");
    text = text.replace(/\bWashington\b/gi, 'Zion');
    text = text.replace(/\btrump supporter(?:(s)\b(')|s\b)/gi, "Nazi$2$1");
    text = text.replace(/\btrump voter(?:(s)\b(')|s\b)/gi, "Nazi$2$1");

    return text;
}


function scanrCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                nowreplace(mutation.addedNodes[i]);
            } else {
                analyze(mutation.addedNodes[i]);
            }
        }
    });
}


function analyzenscan(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    scanrConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyscanr, titlescanr;

    analyze(doc.body);
    doc.title = replaceText(doc.title);

    bodyscanr = new Mutationscanr(scanrCallback);
    bodyscanr.scan(doc.body, scanrConfig);

    if (docTitle) {
        titlescanr = new Mutationscanr(scanrCallback);
        titlescanr.scan(docTitle, scanrConfig);
    }
}
analyzenscan(document);
