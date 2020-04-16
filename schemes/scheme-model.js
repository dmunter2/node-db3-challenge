const db = require('../data/db-config')



module.exports = {
  find,
  findById,
  update,
  // findSteps,
  // add,
  // update,
  // remove

}


function find() {
  return db('schemes')
}

function findById(id){
  return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id){
  return db('schemes')
  .where({ id})
}


function update(id, changes) {
  return db('schemes')
    .where({ id })
    .update(changes, '*');
}



// function find(query) {
//   let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
//   const offset = limit * (page - 1);

//   let rows = db('hubs')
//     .orderBy(sortby, sortdir)
//     .limit(limit)
//     .offset(offset);

//   return rows;
// }

// function findById(id) {
//   return db('hubs')
//     .where({ id })
//     .first();
// }

// async function add(hub) {
//   const [id] = await db('hubs').insert(hub);

//   return findById(id);
// }

// function remove(id) {
//   return db('hubs')
//     .where({ id })
//     .del();
// }

// function update(id, changes) {
//   return db('hubs')
//     .where({ id })
//     .update(changes, '*');
// }

// function findHubMessages(hubId) {
//   return db('messages as m')
//     .join('hubs as h', 'm.hub_id', 'h.id')
//     .select('m.id', 'm.text', 'm.sender', 'h.id as hubId', 'h.name as hub')
//     .where({ hub_id: hubId });
// }
