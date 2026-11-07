# Bennett fracture module assets

Clinical images are reproduced unchanged. Captions, explanations and quizzes are original MedLearn teaching material. Six SVGs are original MedLearn schematics, not clinical images; they simplify three-dimensional anatomy and are not to scale.

## External images

- `wrist-anatomy.png`: Henry Vandyke Carter, Gray's Anatomy, 1918, plate 336. Public domain. Source: https://commons.wikimedia.org/wiki/File:Gray336.png . Original: https://upload.wikimedia.org/wikipedia/commons/3/37/Gray336.png . Older label “greater multangular” means trapezium.
- `bennett-xray.jpg`: Hellerhoff, with an arrow added by Doc James. CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/ . Source: https://commons.wikimedia.org/wiki/File:Bennett-Faktur_seitlich_cropped.jpg . Original: https://upload.wikimedia.org/wikipedia/commons/5/52/Bennett-Faktur_seitlich_cropped.jpg . The downloaded version includes the existing arrow; no additional edits were made.
- `rolando-ct.jpg`: Hellerhoff. CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/ . Source: https://commons.wikimedia.org/wiki/File:Rolandofraktur_CT_VR.jpg . Original: https://upload.wikimedia.org/wikipedia/commons/d/d2/Rolandofraktur_CT_VR.jpg . This is a Rolando comparison injury, not a Bennett example.
- `fixation-xray.png`: James Heilman, MD. CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/ . Source: https://commons.wikimedia.org/wiki/File:BennettFracRepaid.png . Original: https://upload.wikimedia.org/wikipedia/commons/4/4c/BennettFracRepaid.png . Different patient from the pretreatment example: not a matched before-and-after series.

Source and licence pages checked 7 November 2026. Original creator credits and licence links are also displayed in the lesson and enlarged-image captions. The CC licences apply to the corresponding images; this does not relicense unrelated application code.

## Original teaching diagrams

- `thumb-map.svg`: bone sequence and joint location; no anatomical proportions implied.
- `saddle-joint.svg`: conceptual profile; opposite curvature in perpendicular planes is explained in text.
- `ligament-forces.svg`: retained fragment, ligament attachment and proximal pull; other stabilisers and three-dimensional rotations are described in the caption rather than inferred from the drawing.
- `fracture-patterns.svg`: fracture-line comparison only, without displacement.
- `thumb-spica.svg`: conceptual support region, not an application or positioning guide.
- `treatment-pathway.svg`: overview following initial protection and specialist assessment; emergency exceptions are explained beside it.

Clinical basis: AO Surgery Reference (Bennett fracture and thumb patient assessment), StatPearls Bennett Fracture (updated June 2026), and Atlas of Emergency Medicine (Bennett and Rolando fractures), linked in the lesson. Restricted publisher figures were not copied.

`build.py` embeds all ten assets into the built lesson via `@@BENNETT:filename@@` placeholders. These images do not require a network connection when viewing the built module.
