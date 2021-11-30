(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{759:function(e,t,s){"use strict";s.r(t);var n=s(44),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("MenuSchema"),e._v(" "),s("h1",{attrs:{id:"schema-de-donnees-pour-le-stationnement-cyclable"}},[e._v("Schéma de données pour le stationnement cyclable")]),e._v(" "),s("p",[e._v("Schéma du stationnement cyclable.\nCe schéma permet de modéliser et définir le stationnement cyclable sur le territoire national.")]),e._v(" "),s("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),s("p",[e._v("Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr propose une solution simple et structurée pour l’ouverture des données pour le stationnement cyclable : la Base Nationale du Stationnement Cyclable (BNSC).")]),e._v(" "),s("p",[e._v("Le schéma de la base de données a été co-construit avec des associations et entrperises du secteur du stationnement cyclable, les producteurs de données et les réutilisateurs. Deux ateliers ouverts (le 25/11/2020 et le 24/02/2021) ont permis sa production. (Il a été établi après une enquête et plusieurs réunions du groupe de travail). Aujourd’hui disponible en version 0.1.0, il sera mis-à-jour régulièrement.")]),e._v(" "),s("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),s("p",[e._v("L’ouverture des données sur le stationnement cyclable nécessaire à l’information voyageur est une obligation légale, définie par le règlement délégué (UE) 2017/1926 concernant la mise à disposition de services d’informations sur les déplacements multimodaux. Le règlement statue la création d’un Point d’Accès National par pays membre ainsi que la mise à disposition des données nécéssaires à l’information voyageur sur celui-ci. Le règlement exige la mise à disposition des données concernant les caractéristiques du réseau cyclable à échéance du 1er décembre 2019.")]),e._v(" "),s("p",[e._v("Ces obligations sont précisées en droit français par la loi d’orientation des mobilités (LOM). Elle désigne les collectivités territoriales comme étant responsables de la mise à disposition des données sur la plateforme transport.data.gouv.fr, qui constitue le Point d’Accès National des données de mobilité pour la France.\nLes collectivités ont la responsabilité de transmettre les données existantes les plus complètes possibles.")]),e._v(" "),s("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),s("p",[e._v("Afin de faciliter la réutilisation et réduire le coût d’intégration de ces données dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final. La base du stationnement cyclable permet ainsi de regrouper en un unique fichier consolidé l’ensemble des infrastructures de stationnement vélo.")]),e._v(" "),s("p",[e._v("La base présente plusieurs cas d’usage :\nElle recense les aménagements pour le stationnement cyclable d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données pour indiquer où stationner leur vélo de manière sécurisé ou non. Elle peut servir également à identifier le niveau d'équipement en points de stationnement d'une zone.\nCe dataset comprend notamment :")]),e._v(" "),s("ul",[s("li",[e._v("la géolocalisation des aménagements pour stationnement des vélos ;")]),e._v(" "),s("li",[e._v("la capacité de ces points de stationnement ;")]),e._v(" "),s("li",[e._v("la nature des accroches ;")]),e._v(" "),s("li",[e._v("le caractère sécurisé ou non (gardien, lumière, accès libre...) ;")]),e._v(" "),s("li",[e._v("le caractère payant ou gratuit.")])]),e._v(" "),s("h2",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),s("p",[e._v('Les jeux de données seront publiées au format CSV encodé en UTF8 avec séparateur "," et en utilisant des " " pour les champs textuels qui pourraient contenir le séparateur. Certains champs sont obligatoires et d\'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.')]),e._v(" "),s("h2",{attrs:{id:"documentation"}},[e._v("Documentation")]),e._v(" "),s("p",[e._v("Une documentation complémentaire est disponible : https://doc.transport.data.gouv.fr/producteurs/documentation-sur-le-stationnement-cyclable")]),e._v(" "),s("h2",{attrs:{id:"publication"}},[e._v("Publication")]),e._v(" "),s("p",[e._v('Dans le but de maintenir à jour un répertoire consolidé des aménagements cyclables en France, les collectivités sont invitées à transmettre systématiquement les données relatives au stationnement cyclable sur leur territoire.\nElles peuvent ajouter le mot-clef "stationnement cyclable" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.\nLes producteurs pourront :')]),e._v(" "),s("ul",[s("li",[e._v("publier directement sur data.gouv.fr ;")]),e._v(" "),s("li",[e._v("publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.")])]),e._v(" "),s("p",[e._v("Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : stationnementcyclable_nom.csv avec nom étant le nom de la collectivité productrice des données, par exemple StationnementCyclable_Amberieu_en_Bugey.csv")]),e._v(" "),s("p",[e._v("En cas de mise à jour d’un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l’équipe transport.data.gouv.fr qui s’assurera de l'actualisation du fichier en question et de son intégration dans la base consolidée.")]),e._v(" "),s("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),s("p",[e._v("Le base nationale du stationnement cyclable sera construite par l'assemblage (ou consolidation) de l'ensemble des fichiers locaux publiés sur data.gouv.fr. Un travail de veille sur les potentiels doublons sera réalisé par l'équipe transport.data.gouv.fr.")]),e._v(" "),s("h2",{attrs:{id:"mise-a-jour"}},[e._v("Mise-à-jour")]),e._v(" "),s("p",[e._v('La consolidation de la base sera effectuée en continu par transport.data.gouv.fr à partir des fichiers publiés sur data.gouv avec le tag "stationnement cyclable” par les producteurs. De nouvelles versions seront publiées lorsque de nouveaux aménagements de stationnement cyclable seront recensés ou mis-à-jour par les producteurs. Cette mise à jour se fait à partir du fichier communiqué précédemment et en reprenant, en les modifiant le cas échéant, les données existantes. Le fichier principal du dataset constitue ainsi systématiquement la dernière mise-à-jour.')]),e._v(" "),s("h2",{attrs:{id:"conditions-d-utilisation"}},[e._v("Conditions d’utilisation")]),e._v(" "),s("p",[e._v("Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la licence ODbL. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application) et que vous repartagez les modifications, améliorations et corrections éventuelles dans les mêmes conditions que cette base (licence ODbL). Plus d’informations "),s("a",{attrs:{href:"https://doc.transport.data.gouv.fr/reutilisateurs/licence-odbl-et-conditions-de-reutilisation",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(".")]),e._v(" "),s("p",[e._v("Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.")]),e._v(" "),s("h2",{attrs:{id:"notes-techniques-pour-contribuer-a-ce-schema"}},[e._v("Notes techniques pour contribuer à ce schéma")]),e._v(" "),s("p",[e._v("Ce schéma s'appuie sur "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"",rel:"noopener noreferrer"}},[e._v("TableSchema")]),e._v(". Pour le modifier, il peut être utile en particulier de se référer à la "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/#field-descriptors",target:"",rel:"noopener noreferrer"}},[e._v("spécification des descripteurs de champs")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"fichiers-disponibles"}},[e._v("Fichiers disponibles")]),e._v(" "),s("p",[e._v("Ce dépôt contient un ensemble de fichiers utiles pour un dépôt d'un schéma "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"",rel:"noopener noreferrer"}},[e._v("Table Schema")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/etalab/schema-stationnement-cyclable/0.2.0/CHANGELOG.html"}},[s("code",[e._v("CHANGELOG.md")])]),e._v(" contient la liste des changements entre les différentes versions du schéma ;")],1),e._v(" "),s("li",[s("a",{attrs:{href:"exemple-valide.csv"}},[s("code",[e._v("exemple-valide.csv")])]),e._v(" est un fichier CSV d'exemple conforme par rapport au schéma décrit dans "),s("code",[e._v("schema.json")]),e._v("  ;")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/etalab/schema-stationnement-cyclable/0.2.0/LICENSE.html"}},[s("code",[e._v("LICENSE.md")])]),e._v(" est le fichier de licence du dépôt ;")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/etalab/schema-stationnement-cyclable/0.2.0/"}},[s("code",[e._v("README.md")])]),e._v(" est le fichier que vous lisez actuellement ;")],1),e._v(" "),s("li",[s("a",{attrs:{href:"requirements.txt"}},[s("code",[e._v("requirements.txt")])]),e._v(" liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt ;")]),e._v(" "),s("li",[s("a",{attrs:{href:"schema.json"}},[s("code",[e._v("schema.json")])]),e._v(" est le schéma au format Table Schema.")])]),e._v(" "),s("h3",{attrs:{id:"integration-continue"}},[e._v("Intégration continue")]),e._v(" "),s("p",[e._v("Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via "),s("a",{attrs:{href:"https://github.com/features/actions",target:"",rel:"noopener noreferrer"}},[e._v("GitHub Actions")]),e._v(" afin de vérifier :")]),e._v(" "),s("ul",[s("li",[e._v("que votre schéma est valide à la spécification Table Schema ;")]),e._v(" "),s("li",[e._v("que vos fichiers d'exemples sont conformes au schéma.")])]),e._v(" "),s("p",[e._v("Vous pouvez consulter la configuration utilisée dans "),s("a",{attrs:{href:".github/workflows/test.yml"}},[s("code",[e._v(".github/workflows/test.yml")])]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"test-en-local"}},[e._v("Test en local")]),e._v(" "),s("p",[e._v("Pour itérer plus facilement sur le schéma en local, il est possible de lancer les tests sur un poste de travail.")]),e._v(" "),s("p",[e._v("Nous recommandons, pour installer la bonne version de Python, l'utilisation de "),s("a",{attrs:{href:"https://github.com/pyenv/pyenv",target:"",rel:"noopener noreferrer"}},[e._v("PyEnv")]),e._v(" pour Mac/Linux et "),s("a",{attrs:{href:"https://github.com/pyenv-win/pyenv-win",target:"",rel:"noopener noreferrer"}},[e._v("pyenv-win")]),e._v(" pour Windows.")]),e._v(" "),s("p",[e._v("Voici la procédure à suivre pour installer l'environnement de test (sous Mac/Linux) et lancer les tests :")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Installation de la version de Python en vigueur avec pyenv")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# voir https://github.com/pyenv/pyenv")]),e._v("\npyenv "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\npython --version\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Installation des dépendances")]),e._v("\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r requirements.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test de la validité du schéma")]),e._v("\nfrictionless validate --type schema schema.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test de la conformité des fichiers d'exemples")]),e._v("\nfrictionless validate --schema schema.json exemple-valide.csv\n")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);