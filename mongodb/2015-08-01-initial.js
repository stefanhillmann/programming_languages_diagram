conn = new Mongo()
db = conn.getDB("ProgrammingLanguages")

lang = db['languages']
lang.drop()

// TODO:
// * designed_by zu developed_by

// root node, mainly as virtual starting point
lang.insert({id: 'past', name: 'Past'})

// template
// lang.insert({id: '', name: '', year: , designed_by: [''], influenced_by: ['']})

// Pre-1950
lang.insert({id: 'ae_order_code', name: 'Analytical Engine order code',
year: 1837, designed_by: ['Charles Babbage'], influenced_by: ['past']})

lang.insert({id: 'plankalkuel_concept', name: 'Plankalkül (concept)', year: 1945,
designed_by: ['Konrad Zuse'], influenced_by: ['past']})

lang.insert({id: 'eniac_coding_system', name: 'ENIAC coding system', year: 1946,
 designed_by: ['John von Neumann', 'John Mauchly', 'J. Presper Eckert',
  'Herman Goldstine'], influenced_by: ['past']})

 lang.insert({id: 'eniac_short_code', name: 'ENIAC Short Code', year: 1946,
 designed_by: ['Richard Clippinger', 'John von Neumann'],
 influenced_by: ['eniac_coding_system']})

 lang.insert({id: 'neumann_goldstine_system',
 name: 'Von Neumann and Goldstine graphing system (Notation)',
 year: 1946, designed_by: ['John von Neumann', 'Herman Goldstine'],
 influenced_by: ['eniac_coding_system']})

lang.insert({id: 'arc_assembly', name: 'ARC Assembly', year: 1947,
designed_by: ['Kathleen Booth'], influenced_by: ['eniac_coding_system']})

lang.insert({id: 'cpc_coding_scheme', name: 'CPC Coding scheme', year: 1948
, designed_by: ['Howard H. Aiken'], influenced_by: ['ae_order_code']})

lang.insert({id: 'curry_notation_system', name: 'Curry notation system',
year: 1948, designed_by: ['Haskell Brooks Curry'], influenced_by: ['eniac_coding_system']})

lang.insert({id: 'plankalkuel_concept_published', name: 'Plankalkül (concept published)',
year: 1948, designed_by: ['Konrad Zuse'], influenced_by: ['plankalkuel_concept']})

lang.insert({id: 'brief_code', name: 'Brief Code', year: 1949,
designed_by: ['John Mauchly', 'William F. Schmidt'],
influenced_by: ['eniac_short_code']})

// ### 1950 ###

lang.insert({id: 'short_code', name: 'Short Code', year: 1950,
designed_by: ['William F. Schmidt', 'Albert B. Tonik', 'J.R. Logan'],
influenced_by: ['Brief Code']})

lang.insert({id: 'birkbeck_assembler', name: 'Birkbeck Assembler', year: 1950,
designed_by: ['Kathleen Booth'], influenced_by: ['arc_assembly']})

lang.insert({id: 'superplan', name: 'Superplan', year: 1951,
designed_by: ['Heinz Rutishauser'], influenced_by: ['plankalkuel_concept_published']})

lang.insert({id: 'algae', name: 'ALGAE', year: 1951,
designed_by: ['Edward A. Voorhees', 'Karl Balke'], influenced_by: ['past']})

lang.insert({id: 'intermediate_programming_language',
name: 'Intermediate Programming Language',
year: 1951, designed_by: ['Arthur Bruks'], influenced_by: ['short_code']})
