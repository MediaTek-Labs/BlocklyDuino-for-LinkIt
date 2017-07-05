# -*- coding: utf-8 -*-
try:
  import lxml.html
except ImportError, e:
  pass # module doesn't exist, deal with it.
  print '[ERROR] lxml.html is missing, abort...'

def unescape(s):
  s = s.replace("&lt;", "<")
  s = s.replace("&gt;", ">")
  # this has to be last:
  s = s.replace("&amp;", "&")
  return s

def readContent(path):
  f = open(path)
  content = f.read()
  f.close()
  return content

base_path = "./apps/blocklyduino/"

insert = base_path + "category.xml"
base = base_path + "base.html"
output = base_path + "index.html"

id = 'toolbox'

html = readContent(base)
html = html.decode('utf-8')
root = lxml.html.fromstring(html)

element = root.get_element_by_id(id)
html = readContent(insert)

element.text = html
content = lxml.html.tostring(root,encoding="utf-8")
text =  unescape(content)

f = open(output,"w")
f.write(text)
f.close()
