import base64,pathlib
d=pathlib.Path(__file__).resolve().parent;s=d/'src'
img=base64.b64encode((d/'adrenal_lab.jpg').read_bytes()).decode()
fig=f'''<figure><img alt="Adrenal glands and zones" src="data:image/jpeg;base64,{img}"><figcaption><span class="ai">AI-generated illustration</span>Left: adrenal glands on the kidneys; right: cortex zones and medulla. Honest flaws: zone thicknesses are stylised (the real fasciculata is the thickest layer, here it looks right, but the glomerulosa is drawn too thick and too regular); the left adrenal vein draining into the left renal vein is not shown; vessel branching is decorative, not anatomically exact.</figcaption></figure>'''
js="const ADRENAL_FIG="+repr(fig).replace("</","<\\/")+";\n"+"\n".join((s/f).read_text() for f in ['data.js','lesson5.js','app.js','cbl5_glossary.js','cbl5_steps1.js','cbl5_steps2.js','cbl5_data.js','cbl5_widgets.js','d2_glossary.js','d2_steps1.js','d2_steps2.js','d2_data.js','d2_widgets.js'])
h=(s/'shell.html').read_text().replace('/*CSS*/',(s/'app.css').read_text()).replace('/*JS*/',js)
(d/'index.html').write_text(h);print(len(h))
