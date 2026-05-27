import {
  Cloud,
  Cpu,
  Droplets,
  FileCode2,
  Fingerprint,
  FlaskConical,
  Layers3,
  Printer,
  Recycle,
  Settings2,
  TriangleAlert,
  Wifi
} from 'lucide-react';

export const topics = [
  {
    id: 'funktion',
    title: 'Funktionsweise',
    kicker: 'Tropfenprinzip',
    icon: Droplets,
    position: { x: 0, y: -650 },
    color: '#21e7ff',
    lineColor: '#fff36d',
    summary:
      'Beim Tintenstrahldruck arbeiten Papiereinzug, Druckkopfbewegung und Tintenausstoß präzise zusammen. Die Tinte wird je nach Technik thermisch oder mechanisch aus den Düsen gedrückt.',
    points: [
      'Papiereinzug: Walzen ziehen das oberste Blatt präzise ein',
      'Positionierung: Der Druckkopf bewegt sich mit Schrittmotor und Encoderstreifen über das Papier',
      'Thermal-Technik: Ein Heizelement erzeugt eine Dampfblase, die einen Tintentropfen aus der Düse schleudert',
      'Piezo-Technik: Ein Piezo-Kristall verformt sich durch Strom und presst Tinte mechanisch heraus',
      'Schwarz-Weiß-Druck: meist pigmentierte schwarze Tinte sorgt für scharfen Text',
      'Farbdruck: Mit CMYK-Tinten werden winzige Punkte gedruckt, die optisch viele Farben ergeben'
    ],
    metric: 'Piezo · Thermal'
  },
  {
    id: 'druckvorgang',
    title: 'Druckablauf',
    kicker: 'Prozess',
    icon: Printer,
    position: { x: 249, y: -601 },
    color: '#00d6b8',
    lineColor: '#fff36d',
    summary:
      'Der Druckvorgang läuft als fortlaufende Kette ab: Daten werden empfangen, verarbeitet, gedruckt, getrocknet und das Blatt wird am Ende ausgegeben.',
    layout: 'timeline',
    points: [
      { title: 'PC sendet Druckdaten', description: 'Das Dokument wird vom Computer an den Drucker übertragen.' },
      { title: 'Drucker speichert Daten im RAM', description: 'Der interne Speicher hält die Druckdaten für die Verarbeitung bereit.' },
      { title: 'Papier wird eingezogen', description: 'Walzen ziehen das oberste Blatt ein und richten es für den Druck aus.' },
      { title: 'Druckkopf wird positioniert', description: 'Motor und Encoderstreifen bringen den Druckkopf an die richtige Startposition.' },
      { title: 'Druckschlitten fährt über das Papier', description: 'Der Schlitten bewegt den Druckkopf quer über die Seite.' },
      { title: 'Düsen geben Tintentropfen ab', description: 'Thermal- oder Piezo-Technik schleudert winzige Tropfen auf das Papier.' },
      { title: 'Papier wird zeilenweise weitertransportiert', description: 'Nach jeder fertigen Zeile rückt das Papier ein Stück weiter.' },
      { title: 'Tinte trocknet', description: 'Die Tinte trocknet auf dem Papier, damit sie nicht verwischt.' },
      { title: 'Dokument wird ausgeworfen', description: 'Das fertige Blatt wird ins Ausgabefach transportiert.' },
      { title: 'Druckkopf fährt in Parkposition', description: 'Am Ende fährt der Druckkopf zurück und wird geschützt geparkt.' }
    ],
    metric: '10 Schritte'
  },
  {
    id: 'druckertreiber',
    title: 'Treiber',
    kicker: 'PC zu Drucker',
    icon: Cpu,
    position: { x: 0, y: 650 },
    color: '#c2f970',
    lineColor: '#fff36d',
    summary:
      'Der Druckertreiber übersetzt die Daten des PCs in druckbare Befehle und steuert Qualität, Papier, Farbe und Gerätestatus.',
    layout: 'driverFlow',
    driverFlow: ['PC', 'Betriebssystem', 'Druckertreiber', 'Drucker'],
    driverSections: [
      {
        title: 'Druckertreiber allgemein',
        items: [
          'Bindeglied zwischen Betriebssystem und Drucker',
          'übersetzt Dokumente in druckbare Daten',
          'steuert Druckoptionen und Geräteeinstellungen'
        ]
      },
      {
        title: 'Wichtige Aufgaben',
        items: [
          'Papierformat wählen',
          'Duplexdruck steuern',
          'Druckqualität einstellen',
          'Farbprofile verwalten',
          'Statusmeldungen anzeigen'
        ]
      },
      {
        title: 'Statusfunktionen',
        items: ['Tintenstand anzeigen', 'Papierstau melden', 'Wartungshinweise ausgeben']
      }
    ],
    driverTypes: [
      {
        title: 'Herstellertreiber',
        pros: ['voller Funktionsumfang', 'bessere Qualität und Optionen'],
        cons: []
      },
      {
        title: 'Standardtreiber',
        pros: ['schnell installiert'],
        cons: ['weniger Funktionen']
      }
    ],
    modernPrinting: ['AirPrint', 'Mopria', 'treiberloses Drucken über WLAN oder Cloud'],
    note: 'Der Treiber übersetzt die Daten des PCs in eine Sprache, die der Drucker versteht.',
    points: [
      'Übersetzer zwischen Betriebssystem und Drucker-Hardware',
      'Konvertierung: wandelt Office-Dokumente in eine lesbare Rastergrafik für den Drucker um',
      'Befehlsgeber: übermittelt Einstellungen wie Layout, Duplex oder Papierformat',
      'Statusanzeige: meldet Tintenstände, Papierstau oder anstehende Wartungen an den PC',
      'Hersteller- vs. Standardtreiber: Herstellertreiber bieten vollen Funktionsumfang',
      'Treiberloses Drucken: AirPrint oder Mopria drucken direkt ohne Installation'
    ],
    metric: 'Driver'
  },
  {
    id: 'druckersprachen',
    title: 'Drucksprachen',
    kicker: 'Datenverarbeitung',
    icon: FileCode2,
    position: { x: -249, y: 601 },
    color: '#9cff6d',
    lineColor: '#fff36d',
    summary:
      'Druckersprachen bestimmen, ob PC oder Drucker mehr Rechenarbeit übernimmt und wie exakt Texte, Bilder und Vektorgrafiken ausgegeben werden.',
    layout: 'languageQuality',
    languages: [
      {
        title: 'GDI',
        items: [
          'PC übernimmt Berechnung',
          'günstige Drucker',
          'einfache Verarbeitung',
          'stärker abhängig vom Computer'
        ]
      },
      {
        title: 'PCL',
        items: [
          'von HP entwickelt',
          'Bürostandard',
          'schneller Text- und Grafikdruck',
          'Drucker verarbeitet Daten selbst'
        ]
      },
      {
        title: 'PostScript',
        items: [
          'von Adobe entwickelt',
          'mathematische Vektorbeschreibung',
          'höchste Präzision',
          'ideal für Grafikdesign und Druckereien'
        ]
      }
    ],
    qualityPoints: [
      'höhere DPI = feinere Druckpunkte',
      'bessere Schärfe bei Bildern und Texten',
      'Vektorgrafiken verhindern Verpixelung',
      'PostScript liefert besonders exakte Ergebnisse'
    ],
    useCases: [
      { label: 'Alltag', value: 'GDI oder PCL ausreichend' },
      { label: 'Professioneller Druck', value: 'PostScript bevorzugt' }
    ],
    workload: [
      { label: 'GDI', value: 'PC arbeitet mehr' },
      { label: 'PCL', value: 'Drucker arbeitet mehr' },
      { label: 'PostScript', value: 'höchste Präzision' }
    ],
    note: 'Die Druckersprache beeinflusst Geschwindigkeit, Genauigkeit und Druckqualität.',
    points: [
      'GDI: PC übernimmt die gesamte Rechenarbeit; Drucker führt nur Befehle aus',
      'PCL: von HP entwickelt; effiziente Text- und Grafikbefehle, Drucker rechnet selbst',
      'PostScript: von Adobe; beschreibt Grafiken mathematisch als Vektoren',
      'Geschwindigkeit: komplexe Sprachen entlasten den PC, brauchen aber starken Druckerprozessor',
      'Qualitätsvorteil: PCL/PS verhindern Verpixeln und halten Logos und Schriften scharf',
      'Einsatzbereich: GDI/PCL für Alltag, PostScript für Grafikdesign und Druckereien'
    ],
    metric: 'GDI · PCL · PS'
  },
  {
    id: 'dpi-aufloesung',
    title: 'DPI & Qualität',
    kicker: 'Auflösung',
    icon: Printer,
    position: { x: -460, y: 460 },
    color: '#4bbcff',
    lineColor: '#8eeeff',
    summary:
      'DPI beschreibt, wie viele Druckpunkte auf einen Zoll passen. Je höher der Wert, desto feiner können Details, Bilder und Grafiken dargestellt werden.',
    layout: 'dpiResolution',
    meaning: ['Dots Per Inch', 'Punkte pro Zoll'],
    statements: [
      'höhere DPI = kleinere und feinere Druckpunkte',
      'mehr Details bei Bildern und Fotos',
      'schärferer Druck bei Grafiken',
      'Text benötigt oft keine extrem hohe Auflösung'
    ],
    dpiLevels: [
      {
        value: '150 DPI',
        items: ['sichtbar gröbere Punkte', 'ausreichend für einfache Ausdrucke']
      },
      {
        value: '600 DPI',
        items: ['deutlich schärfer', 'typischer Standard für gute Qualität']
      },
      {
        value: '1200 DPI+',
        items: ['sehr feine Details', 'geeignet für Fotos und professionelle Ausdrucke']
      }
    ],
    extras: [
      'Druckqualität hängt auch von Papier, Tinte und Druckmodus ab',
      'hohe DPI bedeutet nicht automatisch perfekte Qualität'
    ],
    note: 'DPI beschreibt die technische Druckauflösung und die Feinheit der Druckpunkte.',
    points: [
      'Dots Per Inch: Punkte pro Zoll',
      'höhere DPI = feinere Druckpunkte',
      'mehr Details bei Bildern und Fotos',
      'Qualität hängt auch von Papier, Tinte und Druckmodus ab'
    ],
    metric: 'DPI'
  },
  {
    id: 'bestandteile',
    title: 'Aufbau',
    kicker: 'Bestandteile',
    icon: Layers3,
    position: { x: 460, y: -460 },
    color: '#ff8a3d',
    lineColor: '#8eeeff',
    summary:
      'Die Hauptbaugruppen und wichtigen Einzelteile arbeiten zusammen, damit Papiertransport, Tintenabgabe und Steuerung exakt funktionieren.',
    layout: 'build',
    images: [
      { src: '/inkjet-schema.png', label: 'Druckkopf-Schema' },
      { src: '/nozzle-principle.jpg', label: 'Düsenprinzip' },
      { src: '/printhead-photo.jpg', label: 'Druckkopf-Foto' }
    ],
    groups: [
      {
        title: 'Papiertransport',
        items: ['Papierfach', 'Einzugsrollen', 'Papierführungen', 'Ausgabefach']
      },
      {
        title: 'Druckeinheit',
        items: ['Druckkopf', 'Düsen', 'Druckschlitten', 'Führungsschiene']
      },
      {
        title: 'Tintenversorgung',
        items: ['Patronen oder Tanks', 'CMYK-Tinten', 'Tintenzufuhr']
      },
      {
        title: 'Steuerung',
        items: ['Sensoren', 'Steuerplatine', 'Motoren', 'Netzteil']
      }
    ],
    components: [
      {
        title: 'Druckkopf + Düsen',
        description: 'geben winzige Tintentropfen präzise aufs Papier ab'
      },
      {
        title: 'Druckschlitten + Führung',
        description: 'bewegt den Druckkopf seitlich'
      },
      {
        title: 'Encoderstreifen',
        description: 'bestimmt die genaue Position des Druckkopfs'
      },
      {
        title: 'Sensoren + Steuerplatine',
        description: 'überwachen Papier, Tinte und Motorsteuerung'
      },
      {
        title: 'Schrittmotor',
        description: 'steuert Papiertransport und Druckkopfbewegung'
      },
      {
        title: 'Einzugsrollen',
        description: 'ziehen das Papier exakt ein'
      }
    ],
    note:
      'Der Aufbau eines Tintenstrahldruckers besteht aus Papiertransport, Druckeinheit, Tintenversorgung und elektronischer Steuerung.',
    points: ['Papiertransport', 'Druckeinheit', 'Tintenversorgung', 'Steuerung'],
    drilldown: {
      title: 'Aufbau & Bestandteile im Detail',
      kicker: 'Die vier Hauptbereiche',
      summary:
        'Hier sind die vier Hauptbereiche des Druckers noch einmal untereinander mit kurzer Beschreibung erklärt.',
      metric: 'Detail',
      items: [
        {
          title: 'Papiertransport',
          description:
            'Zieht Papier aus dem Fach ein, führt es gerade durch den Drucker und gibt es am Ende wieder aus.'
        },
        {
          title: 'Druckeinheit',
          description:
            'Bringt die Tinte mit Druckkopf und Düsen punktgenau auf das Papier.'
        },
        {
          title: 'Tintenversorgung',
          description:
            'Stellt die Farben bereit, meistens über Patronen oder Tintentanks im CMYK-System.'
        },
        {
          title: 'Versorgung',
          description:
            'Umfasst Steuerung und Energie: Sensoren, Platine, Motoren, Netzteil und Display koordinieren den Ablauf.'
        }
      ]
    },
    metric: '4 Gruppen'
  },
  {
    id: 'wartung',
    title: 'Wartung',
    kicker: 'Verschleißteile',
    icon: Recycle,
    position: { x: 601, y: -249 },
    color: '#60f56f',
    lineColor: '#8eeeff',
    summary:
      'Wartung hängt von Nutzung, Druckmenge und sichtbaren Problemen ab. Typisch sind leere Tinte, verstopfte Düsen oder abgenutzte Einzugsrollen.',
    layout: 'maintenanceTable',
    tableRows: [
      {
        teil: 'Tinte / Patronen / Tanks',
        problem: 'leer',
        wartung: 'Wechsel nach Füllstand'
      },
      {
        teil: 'Druckkopf / Düsen',
        problem: 'verstopft, Streifen',
        wartung: 'Reinigung bei Bedarf, Wechsel selten'
      },
      {
        teil: 'Einzugsrollen',
        problem: 'rutschen, Papierstau',
        wartung: 'Reinigung oder Wechsel nach Abnutzung'
      },
      {
        teil: 'Wartungsbox / Resttinte',
        problem: 'Behälter voll',
        wartung: 'Wechsel laut Druckermeldung'
      },
      {
        teil: 'Papierführungen / Kleinteile',
        problem: 'schiefer Einzug',
        wartung: 'Austausch bei Defekt'
      }
    ],
    note: 'Wechselintervalle hängen von Nutzung, Druckmenge und Hersteller ab.',
    points: [
      'Tinte / Patronen / Tanks: leer, Wechsel nach Füllstand oder Seitenleistung',
      'Druckkopf / Düsen: verstopft oder Streifen, Reinigung bei Bedarf',
      'Einzugsrollen: rutschen oder Papierstau, reinigen und bei Abnutzung ersetzen',
      'Wartungsbox / Resttinte: Behälter voll, wechseln wenn der Drucker es meldet',
      'Papierführungen / Kleinteile: schiefer Einzug, bei Defekt oder starker Abnutzung'
    ],
    metric: '5 Teile'
  },
  {
    id: 'anschluss',
    title: 'Anschlüsse',
    kicker: 'Verbindungen',
    icon: Wifi,
    position: { x: -601, y: 249 },
    color: '#35a7ff',
    lineColor: '#8eeeff',
    summary:
      'Tintenstrahldrucker können direkt, über Netzwerk oder mobil verbunden werden. Je nach Einsatz sind USB, LAN, WLAN oder mobiles Drucken sinnvoll.',
    layout: 'connectionOptions',
    connections: [
      {
        title: 'USB',
        items: ['direkte Verbindung mit PC', 'einfach und stabil']
      },
      {
        title: 'LAN / Ethernet',
        items: ['Verbindung über Router oder Switch', 'ideal für Büro-Netzwerke']
      },
      {
        title: 'WLAN',
        items: ['kabelloses Drucken im Netzwerk', 'flexibel ohne Kabel']
      },
      {
        title: 'Wi-Fi Direct',
        items: ['direkte Verbindung ohne Router', 'praktisch für Smartphones und Laptops']
      },
      {
        title: 'Mobiles Drucken',
        items: ['AirPrint', 'Mopria', 'Hersteller-Apps']
      }
    ],
    hints: [
      'mehrere Geräte können denselben Drucker nutzen',
      'WLAN erleichtert flexibles Drucken im Haushalt oder Büro',
      'mobile Geräte können direkt drucken'
    ],
    note: 'USB = direkt, LAN = stabil, WLAN = flexibel.',
    points: [
      'USB: direkt am PC, einfach und stabil',
      'LAN / Ethernet: über Router oder Switch, stabil fürs Büro-Netzwerk',
      'WLAN: kabellos im Netzwerk, flexibel ohne Kabel',
      'Wi-Fi Direct: direkt ohne Router, praktisch für Laptop oder Smartphone',
      'Mobiles Drucken: AirPrint, Mopria oder Hersteller-App für Smartphone und Tablet'
    ],
    metric: '5 Wege'
  },
  {
    id: 'tinte-aufbau',
    title: 'Tintenaufbau',
    kicker: 'Woraus Druckertinte besteht',
    icon: FlaskConical,
    position: { x: 650, y: 0 },
    color: '#ffb000',
    lineColor: '#ff3b3b',
    summary:
      'Druckertinte ist eine genau abgestimmte Mischung aus Farbstoffen oder Pigmenten, Lösungsmitteln und Zusatzstoffen für gleichmäßigen Druck.',
    layout: 'inkComposition',
    ingredients: [
      'Farbstoffe oder Pigmente',
      'Wasser oder Lösungsmittel',
      'Zusatzstoffe gegen Austrocknung',
      'Konservierungsstoffe',
      'Tenside für gleichmäßigen Fluss'
    ],
    inkTypes: [
      {
        title: 'Dye-Tinte',
        subtitle: 'Farbstofftinte',
        items: ['kräftige Farben', 'günstig', 'wasserempfindlicher']
      },
      {
        title: 'Pigmenttinte',
        subtitle: 'Partikel in der Tinte',
        items: ['wasserfester', 'UV-beständiger', 'schärferer Text']
      }
    ],
    cmyk: ['Cyan', 'Magenta', 'Yellow', 'Black'],
    note:
      'Die Mischung aus verschiedenen Farben und Zusatzstoffen ermöglicht präzisen und langlebigen Druck.',
    points: [
      'Farbstoffe oder Pigmente',
      'Wasser oder Lösungsmittel',
      'Zusatzstoffe gegen Austrocknung',
      'CMYK-System: Cyan, Magenta, Yellow und Black'
    ],
    metric: 'CMYK'
  },
  {
    id: 'nachbautinten',
    title: 'Nachbautinten',
    kicker: 'Original vs. kompatible Tinte',
    icon: TriangleAlert,
    position: { x: 601, y: 249 },
    color: '#ff4f4f',
    lineColor: '#ff3b3b',
    summary:
      'Originaltinte ist teurer, aber meist zuverlässiger. Nachbautinte spart Geld, kann jedoch Farbabweichungen, Düsenprobleme oder Fehlermeldungen verursachen.',
    layout: 'inkCompare',
    comparisons: [
      {
        title: 'Originaltinte',
        tone: 'positive',
        pros: ['hohe Druckqualität', 'optimale Druckkopfschonung', 'geringeres Ausfallrisiko'],
        cons: ['teuer']
      },
      {
        title: 'Nachbautinte',
        tone: 'warning',
        pros: ['günstiger', 'oft ausreichend für Alltag'],
        cons: ['mögliche Farbabweichungen', 'verstopfte Düsen', 'schlechtere Haltbarkeit', 'mögliche Garantieprobleme']
      }
    ],
    warning:
      'Billige Nachbautinten können den Druckkopf beschädigen oder Fehlermeldungen verursachen.',
    points: [
      'Günstiger als Originalpatronen, aber oft schlechtere Druckqualität',
      'Farben können abweichen und je Hersteller unterschiedlich sein',
      'Gefahr von verstopften Druckköpfen und schnellerer Abnutzung',
      'Manche Drucker erkennen Patronen nicht, Garantie kann verloren gehen'
    ],
    metric: 'Risiko'
  },
  {
    id: 'gesundheit-umwelt',
    title: 'Gesundheit & Umwelt',
    kicker: 'Sicherer Umgang mit Druckertinte',
    icon: Recycle,
    position: { x: 460, y: 460 },
    color: '#62f36b',
    lineColor: '#ff3b3b',
    summary:
      'Druckertinte sollte sauber verwendet und korrekt entsorgt werden. So sinken Risiken für Gesundheit, Umwelt und Ressourcenverbrauch.',
    layout: 'impactGrid',
    sections: [
      {
        title: 'Gesundheit',
        items: [
          'Hautkontakt vermeiden',
          'nicht verschlucken',
          'bei empfindlichen Personen mögliche Reizungen',
          'gute Belüftung empfohlen'
        ]
      },
      {
        title: 'Umwelt',
        items: [
          'Patronen enthalten Kunststoff und Chemikalien',
          'falsche Entsorgung belastet die Umwelt',
          'Produktion verursacht Ressourcenverbrauch',
          'moderne Tinten meist schadstoffärmer als früher'
        ]
      },
      {
        title: 'Nachhaltigkeit',
        items: [
          'Nachfüllsysteme sparen Müll',
          'Duplexdruck spart Papier',
          'Eco-Modi reduzieren Tintenverbrauch'
        ]
      }
    ],
    note: 'Richtige Nutzung und Entsorgung schützen Umwelt und Gesundheit.',
    points: [
      'Haut- und Augenreizungen sind möglich, Tinte nicht verschlucken',
      'Bei manchen Druckern kann Feinstaub entstehen',
      'Plastikmüll durch Patronen und Umweltbelastung durch Resttinte',
      'Produktion verbraucht Ressourcen, richtige Entsorgung ist wichtig'
    ],
    metric: 'Entsorgung'
  },
  {
    id: 'recycling',
    title: 'Recycling',
    kicker: 'Wiederverwertung statt Restmüll',
    icon: Recycle,
    position: { x: 249, y: 601 },
    color: '#24d6a3',
    lineColor: '#ff3b3b',
    summary:
      'Leere Patronen gehören in Rücknahmesysteme oder Sammelboxen. So können Kunststoff, Metall und Reststoffe wiederverwertet werden.',
    layout: 'recycleFlow',
    flow: [
      'Leere Patrone',
      'Sammelbox oder Händler',
      'Recyclingbetrieb',
      'Reinigung & Zerlegung',
      'Wiederverwertung von Kunststoff und Metall'
    ],
    extras: [
      'Resttinte wird in Wartungsboxen gesammelt',
      'Viele Hersteller bieten Rücknahmesysteme an',
      'Patronen niemals im normalen Hausmüll entsorgen'
    ],
    benefits: ['weniger Elektromüll', 'spart Rohstoffe', 'reduziert Umweltbelastung'],
    note: 'Recycling verlängert den Lebenszyklus von Materialien und reduziert Abfall.',
    points: [
      'Leere Patronen sind recycelbar und können beim Händler zurückgegeben werden',
      'Wiederbefüllung spart Ressourcen und reduziert Elektroschrott',
      'Resttinte darf nicht in den Abfluss, Spezialentsorgung ist empfohlen',
      'Kunststoffteile können wiederverwendet werden'
    ],
    metric: 'ReUse'
  },
  {
    id: 'kurzfazit',
    title: 'Fazit',
    kicker: 'Zusammenfassung',
    icon: Printer,
    position: { x: -249, y: -601 },
    color: '#ff4f4f',
    lineColor: '#ff3b3b',
    summary:
      'Zum Abschluss: Tintenstrahldrucker verbinden präzise Mechanik, Tinte, Elektronik, Software und moderne Verbindungstechniken.',
    layout: 'finalSummary',
    highlights: [
      'Tintenstrahldrucker arbeiten mit präzisen Tintentropfen',
      'Druckqualität hängt von Tinte, DPI und Papier ab',
      'Treiber und Druckersprachen steuern die Datenverarbeitung',
      'WLAN und Cloud-Druck ermöglichen flexibles Drucken',
      'Verschleißteile benötigen regelmäßige Wartung',
      'Recycling reduziert Umweltbelastung',
      'Moderne Drucker kombinieren Mechanik, Elektronik und Software'
    ],
    note:
      'Tintenstrahldrucker sind vielseitige Systeme für präzises und flexibles Drucken im Alltag und Beruf.',
    points: [
      'präzise Tintentropfen',
      'Treiber, WLAN und Cloud-Druck',
      'Wartung und Recycling'
    ],
    metric: 'Finale'
  },
  {
    id: 'mic',
    title: 'Machine ID Code',
    kicker: 'Yellow Dots',
    icon: Fingerprint,
    position: { x: -460, y: -460 },
    color: '#ffcf5a',
    lineColor: '#ff3b3b',
    summary:
      'Der Machine Identification Code ist ein kaum sichtbares gelbes Punktmuster, das bei vielen Farbdruckern Sicherheits- und Rückverfolgungszwecken dient.',
    layout: 'micCode',
    sections: [
      {
        title: 'Was ist der MIC?',
        items: [
          'unsichtbares Punktmuster auf vielen Farbausdrucken',
          'auch „Yellow Dots“ genannt',
          'enthält Geräteinformationen'
        ]
      },
      {
        title: 'Gespeicherte Informationen',
        items: ['Druckermodell', 'Seriennummer', 'Datum und Uhrzeit des Ausdrucks']
      },
      {
        title: 'Warum wird es genutzt?',
        items: [
          'Schutz gegen Geldfälschung',
          'Rückverfolgung bei Missbrauch',
          'Sicherheitsfunktion vieler Farbdrucker'
        ]
      },
      {
        title: 'Wichtige Hinweise',
        items: [
          'meist nur bei Farblasern sichtbar',
          'für Menschen kaum erkennbar',
          'mit Speziallicht oder Vergrößerung sichtbar'
        ]
      }
    ],
    note:
      'Der Machine Identification Code dient hauptsächlich Sicherheits- und Rückverfolgungszwecken.',
    points: [
      'Der Code ist meist mit bloßem Auge kaum sichtbar',
      'Er kann Seriennummer, Datum oder Uhrzeit des Drucks enthalten',
      'Er wird vor allem mit Farblaserdruckern und manchen Kopierern verbunden',
      'Wichtiges Thema bei Datenschutz, Fälschungsschutz und Nachverfolgung'
    ],
    metric: 'MIC'
  },
  {
    id: 'cloud-druck',
    title: 'WLAN, NFC & Cloud',
    kicker: 'Kabellos',
    icon: Cloud,
    position: { x: -601, y: -249 },
    color: '#4bbcff',
    lineColor: '#ff3b3b',
    summary:
      'Kabellose Drucktechnologien verbinden Drucker flexibel mit Computer, Smartphone, Tablet oder Cloud-Diensten.',
    layout: 'wirelessCloud',
    technologies: [
      {
        title: 'WLAN-Druck',
        items: [
          'kabellose Verbindung im Netzwerk',
          'mehrere Geräte gleichzeitig möglich',
          'flexibel im Haushalt oder Büro'
        ]
      },
      {
        title: 'NFC-Druck',
        items: [
          'Verbindung durch kurzes Berühren',
          'schnelle Kopplung mit Smartphone',
          'einfache Nutzung ohne lange Einrichtung'
        ]
      },
      {
        title: 'Cloud-Druck',
        items: [
          'Drucken über Internetdienste',
          'Zugriff auch von unterwegs',
          'Verbindung mit Google Drive, OneDrive oder Hersteller-Clouds'
        ]
      }
    ],
    hints: [
      'mobiles Drucken über AirPrint oder Mopria',
      'Smartphone und Tablet direkt nutzbar',
      'kein USB-Kabel notwendig'
    ],
    note: 'Kabellose Technologien machen Drucken flexibler und einfacher.',
    points: [
      'WLAN-Druck im Netzwerk',
      'NFC für schnelle Kopplung',
      'Cloud-Druck über Internetdienste',
      'AirPrint und Mopria für mobile Geräte'
    ],
    metric: 'Wireless'
  },
  {
    id: 'konfiguration',
    title: 'Konfiguration',
    kicker: 'Einrichtung',
    icon: Settings2,
    position: { x: -650, y: 0 },
    color: '#a07cff',
    lineColor: '#ff3b3b',
    summary:
      'Bei der Konfiguration werden Verbindung, Treiber, Standardoptionen und Zusatzfunktionen eingerichtet, damit der Drucker stabil und passend arbeitet.',
    layout: 'configSetup',
    setupFlow: ['Verbinden', 'Erkennen', 'Treiber', 'Einstellungen', 'Testdruck'],
    sections: [
      {
        title: 'Installationsmöglichkeiten',
        items: [
          'Plug & Play über USB',
          'Treiberinstallation vom Hersteller',
          'automatische Windows-Erkennung',
          'Installation über Netzwerk oder WLAN'
        ]
      },
      {
        title: 'Typische Einstellungen',
        items: [
          'Standarddrucker festlegen',
          'Papierformat auswählen',
          'Druckqualität einstellen',
          'Farb- oder Schwarzweißdruck',
          'Duplexdruck aktivieren'
        ]
      },
      {
        title: 'Netzwerkkonfiguration',
        items: [
          'WLAN-Zugangsdaten eingeben',
          'IP-Adresse automatisch oder manuell',
          'Freigabe im Heim- oder Firmennetzwerk'
        ]
      },
      {
        title: 'Zusätzliche Funktionen',
        items: ['Drucker-Apps', 'Firmware-Updates', 'Scan- und Cloud-Funktionen']
      }
    ],
    note: 'Die richtige Konfiguration sorgt für stabile Verbindung und optimale Druckqualität.',
    points: [
      'Treiberinstallation und USB- oder WLAN-Verbindung einrichten',
      'Drucker im Netzwerk hinzufügen und Standarddrucker festlegen',
      'Druckqualität, Papierformat und Duplexdruck konfigurieren',
      'Firmware-Updates halten Funktionen und Kompatibilität aktuell'
    ],
    metric: 'Setup'
  },
  {
    id: 'kmu-vergleich',
    title: 'KMU-Vergleich',
    kicker: 'Business-Drucker',
    icon: Printer,
    position: { x: 960, y: -230 },
    lineStart: { x: 760, y: -160 },
    subgroup: true,
    color: '#35a7ff',
    lineColor: '#8eeeff',
    summary:
      'Zwei sparsame und leise Multifunktions-Tintenstrahldrucker im direkten Vergleich für kleine und mittlere Unternehmen.',
    layout: 'printerCompare',
    columns: ['Kategorie', 'Epson EcoTank Pro ET-5850', 'HP OfficeJet Pro 9025e'],
    rows: [
      ['Drucktyp', 'Multifunktions-Tintentank', 'Multifunktions-Patronendrucker'],
      ['Geeignet für', 'kleine und mittlere Unternehmen', 'Homeoffice und kleine Büros'],
      ['Max. Druckvolumen', 'bis ca. 66.000 Seiten/Monat', 'bis ca. 30.000 Seiten/Monat'],
      ['Druckgeschwindigkeit', 'ca. 25 Seiten/min', 'ca. 24 Seiten/min'],
      ['Lautstärke', 'relativ leise', 'leise'],
      ['Anschlüsse', 'USB, LAN, WLAN, Wi-Fi Direct', 'USB, LAN, WLAN, Cloud'],
      ['Besonderheiten', 'extrem niedrige Tintenkosten', 'starke Office-Funktionen']
    ],
    metric: 'KMU'
  },
  {
    id: 'kosten-verbrauch',
    title: 'Kosten & Verbrauch',
    kicker: 'Tintenkosten',
    icon: Printer,
    position: { x: 960, y: 0 },
    lineStart: { x: 760, y: 0 },
    subgroup: true,
    color: '#24d6a3',
    lineColor: '#8eeeff',
    summary:
      'Der größte Unterschied liegt beim Tintensystem: Tintentank gegen klassische Patronen.',
    layout: 'printerCompare',
    columns: ['Kategorie', 'Epson ET-5850', 'HP 9025e'],
    rows: [
      ['Tintensystem', 'nachfüllbare Tintentanks', 'klassische Patronen'],
      ['Kosten pro Seite', 'sehr niedrig', 'mittel'],
      ['Verschleißteile', 'Wartungsbox, Rollen', 'Patronen, Druckkopf'],
      ['Mitgeliefertes Zubehör', 'Startertinte, Netzkabel', 'Scanner/Fax integriert'],
      ['Reichweite Erstausstattung', 'bis ca. 7.500 Schwarzweißseiten', 'deutlich geringer als Epson'],
      ['Wartungsaufwand', 'gering', 'mittel']
    ],
    metric: 'Kosten'
  },
  {
    id: 'druckerwahl',
    title: 'Druckerwahl',
    kicker: 'Warum diese Geräte?',
    icon: Printer,
    position: { x: 960, y: 230 },
    lineStart: { x: 760, y: 160 },
    subgroup: true,
    color: '#ffcf5a',
    lineColor: '#8eeeff',
    summary:
      'Beide Drucker eignen sich für KMUs, unterscheiden sich aber vor allem bei Tintenkosten, Druckvolumen und Cloud-Funktionen.',
    layout: 'printerDecision',
    choices: [
      {
        title: 'Epson EcoTank Pro ET-5850',
        points: [
          'extrem günstige Druckkosten',
          'ideal für hohes Druckvolumen',
          'sehr sparsam',
          'gut für KMUs'
        ]
      },
      {
        title: 'HP OfficeJet Pro 9025e',
        points: [
          'gute Druckqualität',
          'einfache Bedienung',
          'starke Netzwerk- und Cloudfunktionen',
          'gut für kleinere Büros'
        ]
      }
    ],
    note:
      'Beide Drucker eignen sich für KMUs, unterscheiden sich jedoch vor allem bei Tintenkosten und Druckvolumen.',
    metric: 'Auswahl'
  }
];
