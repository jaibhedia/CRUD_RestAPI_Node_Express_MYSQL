const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
module.exports = {
    getMultiple
  }
  async function create(backend){
    const result = await db.query(
      `INSERT INTO programming_languages 
      (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
      VALUES 
      ('${backend.name}', ${backend.released_year}, ${backend.githut_rank}, ${backend.pypl_rank}, ${backend.tiobe_rank})`
    );
  
    let message = 'Error in creating programming language';
  
    if (result.affectedRows) {
      message = 'Programming language created successfully';
    }
  
    return {message};
  }
  module.exports = {
    getMultiple,
    create
  }
  async function update(id, backend){
    const result = await db.query(
      `UPDATE programming_languages 
      SET name="${backend.name}", released_year=${backend.released_year}, githut_rank=${backend.githut_rank}, 
      pypl_rank=${backend.pypl_rank}, tiobe_rank=${backend.tiobe_rank} 
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating programming language';
  
    if (result.affectedRows) {
      message = 'Programming language updated successfully';
    }
  
    return {message};
  }
  module.exports = {
    getMultiple,
    create,
    update,
  };
  async function remove(id){
    const result = await db.query(
      `DELETE FROM programming_languages WHERE id=${id}`
    );
  
    let message = 'Error in deleting programming language';
  
    if (result.affectedRows) {
      message = 'Programming language deleted successfully';
    }
  
    return {message};
  }
  module.exports = {
    getMultiple,
    create,
    update,
    remove,
  };
  async function search(id){
    const rows = await db.callSpSearch(id);
    const data = helper.emptyOrRows(rows);
    return {
      data
    }
  }
  
  module.exports = {
    getMultiple,
    create,
    update,
    remove,
    search
  }
 