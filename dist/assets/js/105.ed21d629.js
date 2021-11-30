(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{597:function(e,i,t){"use strict";t.r(i);var a=t(44),n=Object(a.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"changelog"}},[e._v("Changelog")]),e._v(" "),t("h2",{attrs:{id:"version-1-0-2-2021-10-11"}},[e._v("Version 1.0.2 (2021-10-11)")]),e._v(" "),t("ul",[t("li",[e._v('Changement du nom du schéma en "Itinéraires de randonnées"')]),e._v(" "),t("li",[e._v("Changement du nom de la propriété "),t("code",[e._v("proprietaire")]),e._v(" en "),t("code",[e._v("producteur")])]),e._v(" "),t("li",[e._v("Réorganisation de la documentation")])]),e._v(" "),t("h2",{attrs:{id:"version-1-0-1-2021-08-29"}},[e._v("Version 1.0.1 (2021-08-29)")]),e._v(" "),t("p",[e._v("Suppression du schéma externe "),t("code",[e._v("https://geojson.org/schema/Point.json")]),e._v(", plus utilisé depuis l'aplatissement de l'objet parking")]),e._v(" "),t("h2",{attrs:{id:"version-1-0-0-2021-08-05"}},[e._v("Version 1.0.0 (2021-08-05)")]),e._v(" "),t("p",[e._v("Correction du JSON Schema :")]),e._v(" "),t("ul",[t("li",[e._v("itineraire_parent : type integer à string")]),e._v(" "),t("li",[e._v("parking : aplatissement de l'objet en deux parking_info et parking_geometrie (format WKT)")]),e._v(" "),t("li",[e._v("medias[url] : changement de l'exemple, ajout format uri et required")]),e._v(" "),t("li",[e._v("plusieurs champs : ajout de descriptions, changement de titres")]),e._v(" "),t("li",[e._v('plusieurs champs : ajout de type "null" possible')]),e._v(" "),t("li",[e._v("eid : changement nom pour id_local et type int à string")]),e._v(" "),t("li",[e._v("cotation : champ supprimé")]),e._v(" "),t("li",[e._v("instructions : modification du titre")]),e._v(" "),t("li",[e._v("pdipr_inscription : ajout")]),e._v(" "),t("li",[e._v("pdipr_date_inscription : ajout")])]),e._v(" "),t("h2",{attrs:{id:"version-0-3-1-unreleased"}},[e._v("Version 0.3.1 - (unreleased)")]),e._v(" "),t("p",[e._v("Correction du JSON Schema :")]),e._v(" "),t("ul",[t("li",[e._v("duree : passage de "),t("code",[e._v('"integer"')]),e._v(" à "),t("code",[e._v('"number"')])]),e._v(" "),t("li",[e._v("itineraire_parent : ajout de "),t("code",[e._v('"type": "null"')])]),e._v(" "),t("li",[e._v("cotation : ajout valeur "),t("code",[e._v('""')])])]),e._v(" "),t("h2",{attrs:{id:"version-0-3-0"}},[e._v("Version 0.3.0")]),e._v(" "),t("p",[e._v("Rétrogradation du schéma en version "),t("code",[e._v("[draft-07](https://json-schema.org/specification-links.html#draft-7)")])]),e._v(" "),t("h2",{attrs:{id:"version-0-2-1"}},[e._v("Version 0.2.1")]),e._v(" "),t("p",[e._v("Correction du JSON Schema :")]),e._v(" "),t("ul",[t("li",[e._v("ajout des "),t("code",[e._v('"type": "null"')]),e._v(" pour les champs non obligatoires")]),e._v(" "),t("li",[e._v("correction de "),t("code",[e._v('"oneOf": [{"$ref": "point"},"null"')]),e._v(" en "),t("code",[e._v('"oneOf": [{"$ref": "point"},{"type": "null"}')])]),e._v(" "),t("li",[e._v("déplacement d'une accolade qui excluait la majorité des champs de l'objet "),t("code",[e._v("properties_randonnee")])])]),e._v(" "),t("h2",{attrs:{id:"version-0-2-0"}},[e._v("Version 0.2.0")]),e._v(" "),t("p",[e._v("Passage au format JSON Schema")]),e._v(" "),t("p",[e._v("Champs modifiés :")]),e._v(" "),t("ul",[t("li",[e._v("id_source : nom")]),e._v(" "),t("li",[e._v("sources : nom, passage en chaîne de caractères")]),e._v(" "),t("li",[e._v("pratique : ajout de valeurs")]),e._v(" "),t("li",[e._v("type : nom, ajout de valeurs")]),e._v(" "),t("li",[e._v("communes : passage en chaîne de caractères")]),e._v(" "),t("li",[e._v("balisage : passage en chaîne de caractères")]),e._v(" "),t("li",[e._v("difficulté : changement de la définition")]),e._v(" "),t("li",[e._v("description_courte : presentation_courte")]),e._v(" "),t("li",[e._v("description : presentation")]),e._v(" "),t("li",[e._v("themes : passage en chaîne de caractères")]),e._v(" "),t("li",[e._v("parking : passage en feature GeoJSON avec une propriété infos_parking, une géométrie")]),e._v(" "),t("li",[e._v("medias : ajout d'une propriété type_media")]),e._v(" "),t("li",[e._v("rando_parent : itineraire_parent")]),e._v(" "),t("li",[e._v("type_sol : passage en chaîne de caractères")])]),e._v(" "),t("p",[e._v("Champs ajoutés :")]),e._v(" "),t("ul",[t("li",[e._v("cotation : cotation technique (ex-difficulté)")])]),e._v(" "),t("p",[e._v("Champs supprimés :")]),e._v(" "),t("ul",[t("li",[e._v("structure")])]),e._v(" "),t("h2",{attrs:{id:"version-0-1-2"}},[e._v("Version 0.1.2")]),e._v(" "),t("p",[e._v("Complétion des métadonnées.")]),e._v(" "),t("p",[e._v("Champs modifiés :")]),e._v(" "),t("ul",[t("li",[e._v("sources : passage en array")]),e._v(" "),t("li",[e._v("balisage : changement de la définition")]),e._v(" "),t("li",[e._v("difficulté : complétion de l'échelle")]),e._v(" "),t("li",[e._v("geometrie : passage en WKT")]),e._v(" "),t("li",[e._v("geometrie_parking : passage en WKT")])]),e._v(" "),t("p",[e._v("Champs ajoutés :")]),e._v(" "),t("ul",[t("li",[e._v("instructions : ancien champ balisage")]),e._v(" "),t("li",[e._v("type_sol : array des types de sol de la randonnée")])]),e._v(" "),t("h2",{attrs:{id:"version-0-1-1"}},[e._v("Version 0.1.1")]),e._v(" "),t("p",[e._v("Publication initiale.")])],1)}),[],!1,null,null,null);i.default=n.exports}}]);