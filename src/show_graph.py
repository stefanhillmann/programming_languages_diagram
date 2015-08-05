__author__ = 'stefan'

import graph_tool as gt
from graph_tool import draw as gtdraw
from pymongo import MongoClient

c = MongoClient('localhost', 27017)
db = c['ProgrammingLanguages']
languages = db.languages

graph = gt.Graph()

id_to_vertex = dict()


vprop_name = graph.new_vertex_property("string")

# First, create the vertexes.
for l in languages.find({}):
    id = l['id']
    name = l['id']
    print 'Add vertex for: ' + name
    v = graph.add_vertex()
    vprop_name[v] = name
    id_to_vertex[id] = v

# Second, create edges between vertexes
for l in languages.find({}):
    if 'influenced_by' in l.keys():
        influenced_by = l['influenced_by']
        id = l['id']
        for other_id in influenced_by:
            this_lang = id_to_vertex[id]
            influencing_lang = id_to_vertex[other_id]
            print 'Add edge from {0} to {1}'.format(other_id, id)
            graph.add_edge(influencing_lang, this_lang)

gv = gt.GraphView(graph)
pos = gtdraw.sfdp_layout(graph)
gtdraw.dr