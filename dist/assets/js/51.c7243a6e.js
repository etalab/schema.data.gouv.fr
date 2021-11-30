(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{543:function(e,_,v){"use strict";v.r(_);var r=v(44),o=Object(r.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("MenuSchema"),e._v(" "),v("h1",{attrs:{id:"changelog"}},[e._v("Changelog")]),e._v(" "),v("h2",{attrs:{id:"v0-6-1"}},[e._v("v0.6.1")]),e._v(" "),v("ul",[v("li",[e._v("Renomme "),v("code",[e._v("ARR_INSEE")]),e._v(" en "),v("code",[e._v("COLL_INSEE")])]),e._v(" "),v("li",[e._v("Renomme "),v("code",[e._v("VEH_PTAC")]),e._v(" en "),v("code",[e._v("VEH_TONNAGE")])]),e._v(" "),v("li",[e._v("Champs mis dans un autre ordre (ex, "),v("code",[e._v("COLL_INSEE")]),e._v(" après "),v("code",[e._v("COLL_NOM")]),e._v(", "),v("code",[e._v("EMPRISE_SENS")]),e._v(" après "),v("code",[e._v("EMPRISE_FIN")]),e._v(")")]),e._v(" "),v("li",[e._v("Support de "),v("code",[e._v("POLYGON")]),e._v(" pour "),v("code",[e._v("GEOM_WKT")]),e._v(" (Cas de communes entières ou de quartiers sur lesquels s'appliquerait la règlementation)")])]),e._v(" "),v("h2",{attrs:{id:"v0-6-0"}},[e._v("v0.6.0")]),e._v(" "),v("ul",[v("li",[e._v("Suppression du champ "),v("code",[e._v("COLL_SIRET")])]),e._v(" "),v("li",[e._v("Ajout de lien vers l'assistant pour le champ "),v("code",[e._v("PERIODE_JH")]),e._v(" vers https://cerema-med.shinyapps.io/groom-groom")]),e._v(" "),v("li",[e._v("Mention du schéma sur les ZFE pour le champ "),v("code",[e._v("EMPRISE_DESIGNATION")])]),e._v(" "),v("li",[e._v("Description simplifiée pour le champ "),v("code",[e._v("GEOM_WKT")])])]),e._v(" "),v("h2",{attrs:{id:"v0-5-0-retour-enquete-reunion-simplification-du-schema"}},[e._v("v0.5.0 (retour enquête + réunion, simplification du schéma)")]),e._v(" "),v("ul",[v("li",[e._v("Renommage du schéma en arrete-circulation-marchandises")]),e._v(" "),v("li",[v("code",[e._v("ARR_DATE_CREATION")]),e._v(" devient "),v("code",[e._v("ARR_DATE")])]),e._v(" "),v("li",[e._v("Suppression de "),v("code",[e._v("ARR_DATE_MAJ")])]),e._v(" "),v("li",[e._v("Suppression de "),v("code",[e._v("ZONE_TYPE")])]),e._v(" "),v("li",[e._v("Suppression de "),v("code",[e._v("ZONE_REF")])]),e._v(" "),v("li",[e._v("Correction de la regex de "),v("code",[e._v("VEH_TYPE")])]),e._v(" "),v("li",[e._v("Suppression de la regex pattern de "),v("code",[e._v("VEH_USAGE")])]),e._v(" "),v("li",[v("code",[e._v("SECTION_VOIE")]),e._v(" devient "),v("code",[e._v("EMPRISE_DESIGNATION")]),e._v(" (englobe les voies et les communes entières)")]),e._v(" "),v("li",[v("code",[e._v("SECTION_SENS")]),e._v(" devient "),v("code",[e._v("EMPRISE_SENS")])]),e._v(" "),v("li",[v("code",[e._v("SECTION_DEBUT_*")]),e._v(" devient "),v("code",[e._v("EMPRISE_DEBUT")])]),e._v(" "),v("li",[v("code",[e._v("SECTION_FIN_*")]),e._v(" devient "),v("code",[e._v("EMPRISE_FIN")])]),e._v(" "),v("li",[e._v("Suppression de "),v("code",[e._v("GEOM_JSON")])]),e._v(" "),v("li",[e._v("Regex pattern pour "),v("code",[e._v("GEOM_WKT")])]),e._v(" "),v("li",[v("code",[e._v("VEH_TYPE")]),e._v(" devient "),v("code",[e._v("VEH_TYPES")])]),e._v(" "),v("li",[v("code",[e._v("VEH_MOTOR")]),e._v(" devient "),v("code",[e._v("VEH_MOTORS")])]),e._v(" "),v("li",[v("code",[e._v("VEH_USAGE")]),e._v(" devient "),v("code",[e._v("VEH_USAGES")])]),e._v(" "),v("li",[v("code",[e._v("VEH_CQA")]),e._v(" devient "),v("code",[e._v("VEH_CQAS")])])]),e._v(" "),v("h2",{attrs:{id:"v0-4-1"}},[e._v("v0.4.1")]),e._v(" "),v("ul",[v("li",[e._v("Ajoute la regex SIRET")]),e._v(" "),v("li",[e._v("Remplace la valeur "),v("code",[e._v("N/C")]),e._v(" par la valeur "),v("code",[e._v("NC")]),e._v(", plus simple, si pas de valeur")]),e._v(" "),v("li",[e._v("Choix du délimiteur "),v("code",[e._v("|")]),e._v(" pour séparer des valeurs. Ex : "),v("code",[e._v('"(?:(?:^|\\\\|)^(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$"')])]),e._v(" "),v("li",[e._v("Modifie la regex de "),v("code",[e._v("SECTION_VOIE")]),e._v(" pour inclure les parenthèses (par ex. "),v("code",[e._v("Avenue Nelson Mandela (RD59c)")]),e._v(")")]),e._v(" "),v("li",[e._v("Supprime "),v("code",[e._v("NC")]),e._v(" des "),v("code",[e._v("missingValues")])]),e._v(" "),v("li",[e._v("Ajoute la regex "),v("code",[e._v("((?:(?:^|;\\s?)(((((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH)|(?:(?:|,)(Mo|Tu|We|Th|Fr|Sa|Su))+|((Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su))))\\s((([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9]))(,(([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9])))?))|((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH) off)|(sunrise-sunset)))+$|(24\\/7))")]),e._v(" pour le format Opening Hours utilisé dans le champ "),v("code",[e._v("PERIODE_JH")])])]),e._v(" "),v("h2",{attrs:{id:"v0-4-0-corrections-etalab"}},[e._v("v0.4.0 (corrections Etalab)")]),e._v(" "),v("ul",[v("li",[e._v("Corrections apportées par Geoffrey Aldebert sur les regexes du schema.json")]),e._v(" "),v("li",[e._v("Ajout d'un exemple valide dans resources")]),e._v(" "),v("li",[e._v("Intégration continue OK")]),e._v(" "),v("li",[e._v("Regex pour "),v("code",[e._v("ARR_INSEE")])]),e._v(" "),v("li",[e._v("Format "),v("code",[e._v("uri")]),e._v(" pour "),v("code",[e._v("ARR_URL")])]),e._v(" "),v("li",[e._v("Regex multivalues sur le modèle de "),v("code",[e._v("(?:(?:^|,)^(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$")])]),e._v(" "),v("li",[e._v("Nouveaux usages pour "),v("code",[e._v("VEH_USAGE")])]),e._v(" "),v("li",[e._v("Ajout de pattern pour "),v("code",[e._v("PERIODE_JH")]),e._v(" : "),v("code",[e._v("(.*?)((\\\\d{1,2}:\\\\d{2})-(\\\\d{1,2}:\\\\d{2})|24/7)")])]),e._v(" "),v("li",[v("code",[e._v("ID")]),e._v(" Primary Key")])]),e._v(" "),v("h2",{attrs:{id:"v0-3-3-enrichissement-des-usages"}},[e._v("v0.3.3 (enrichissement des usages)")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Ajout de ressources ("),v("code",[e._v("sources")]),e._v(")")])]),e._v(" "),v("li",[v("p",[e._v("Ajout de Julie Raffaillac dans les contributeurs")])]),e._v(" "),v("li",[v("p",[e._v("Ajout de Vélo-cargos dans "),v("code",[e._v("VEH_TYPE")])])]),e._v(" "),v("li",[v("p",[e._v("Ajout de valeurs dans "),v("code",[e._v("VEH_USAGE")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[e._v("  - Citernes                                                                                                   \n  - Véhicules d'approvisionnement des marchés                                                                                               \n  - Véhicules effectuant du transport exceptionnel au sens de l'article R.433-1 du code de la route et munis d'une autorisation préfectorale\n  - Véhicules de transport de matériaux\n  - Véhicules porte-voitures\n")])])])]),e._v(" "),v("li",[v("p",[e._v("Ajout de valeurs dans "),v("code",[e._v("VEH_CQA")])])]),e._v(" "),v("li",[v("p",[e._v("Renommage de "),v("code",[e._v("SECTION_COTE")]),e._v(" en "),v("code",[e._v("SECTION_SENS")])])]),e._v(" "),v("li",[v("p",[e._v("Ajout de Nord, Sud, Est, Ouest dans "),v("code",[e._v("SECTION_SENS")])])])]),e._v(" "),v("h2",{attrs:{id:"v0-3-2"}},[e._v("v0.3.2")]),e._v(" "),v("ul",[v("li",[e._v("Ajout de valeur "),v("code",[e._v("Autocars")]),e._v(" dans "),v("code",[e._v("VEH_USAGE")])]),e._v(" "),v("li",[e._v("Ajout de valeur "),v("code",[e._v("Transport de denrées animales ou végétales")]),e._v(" dans "),v("code",[e._v("VEH_USAGE")])])]),e._v(" "),v("h2",{attrs:{id:"v0-3-1"}},[e._v("v0.3.1")]),e._v(" "),v("ul",[v("li",[e._v("Renommage de "),v("code",[e._v("SECTION_REGL_ID")]),e._v(" renommé en "),v("code",[e._v("ID")])]),e._v(" "),v("li",[e._v("Ajout de Véhicules de travaux dans "),v("code",[e._v("VEH_USAGE")])]),e._v(" "),v("li",[e._v("Réordonnancement des champs "),v("code",[e._v("ARR_*")])])]),e._v(" "),v("h2",{attrs:{id:"v0-3-0"}},[e._v("v0.3.0")]),e._v(" "),v("p",[e._v("Publication sur le repo github du Cerema en vue de "),v("a",{attrs:{href:"http://schema.data.gouv.fr/",target:"",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr")])]),e._v(" "),v("ul",[v("li",[e._v("Modification des types des champs "),v("code",[e._v("VEH_USAGE")]),e._v(", "),v("code",[e._v("VEH_MOTOR")]),e._v(", "),v("code",[e._v("VEH_CQA")]),e._v(" de "),v("strong",[e._v("array")]),e._v(" vers "),v("strong",[e._v("string")]),e._v(" avec regex pattern 'Séparation par caractère "),v("code",[e._v("|")]),e._v("' car questionnement sur prise en charge du type "),v("strong",[e._v("array")]),e._v(" par la plateforme de publication et de validation des données d'Etalab")]),e._v(" "),v("li",[e._v("Ajout de champ "),v("code",[e._v("SECTION_DEBUT_POINT")])]),e._v(" "),v("li",[e._v("Ajout de champ "),v("code",[e._v("SECTION_DEBUT_REF")])]),e._v(" "),v("li",[e._v("Ajout de champ "),v("code",[e._v("SECTION_FIN_POINT")])]),e._v(" "),v("li",[e._v("Ajout de champ "),v("code",[e._v("SECTION_FIN_REF")])])]),e._v(" "),v("h2",{attrs:{id:"v0-2-3"}},[e._v("v0.2.3")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog",target:"",rel:"noopener noreferrer"}},[e._v("Voir sur OpenDataFrance")])]),e._v(" "),v("h2",{attrs:{id:"v0-2-2"}},[e._v("v0.2.2")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog",target:"",rel:"noopener noreferrer"}},[e._v("Voir sur OpenDataFrance")])]),e._v(" "),v("h2",{attrs:{id:"v0-2-1"}},[e._v("v0.2.1")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog",target:"",rel:"noopener noreferrer"}},[e._v("Voir sur OpenDataFrance")])]),e._v(" "),v("h2",{attrs:{id:"v0-2-0"}},[e._v("v0.2.0")]),e._v(" "),v("p",[e._v("Intégration du schéma sur le gitbook d'OpenDataFrance et revue par Jean-Marie Bourgogne")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog",target:"",rel:"noopener noreferrer"}},[e._v("Voir sur OpenDataFrance")])]),e._v(" "),v("h2",{attrs:{id:"v0-1-0"}},[e._v("v0.1.0")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://lite.framacalc.org/9ms6-schema-circulation",target:"",rel:"noopener noreferrer"}},[e._v("Première proposition du schéma sur framapad")])])],1)}),[],!1,null,null,null);_.default=o.exports}}]);