function getNumSkillsDb(ranking,itemSkill){

	var itemNum = ranking._offersBackEnd.forEach(function(itemName,i){

		if(itemSkill==='ORACLE'&& itemName.name ==="Oracle"){
			itemName.num++;
		}
		if(itemSkill==='MYSQL'&& itemName.name ==="MySQL"){
			itemName.num++;
		}
		if(itemSkill==='ACCESS' && itemName.name ==="Microsoft Access"){
			itemName.num++;
		}
		if(itemSkill==='POSTGRESQL' && itemName.name ==="PostgreSQL"){
			itemName.num++;
		}
		if(itemSkill==='SYBASE' && itemName.name ==="Sybase"){
			itemName.num++;
		}
		if(itemSkill==='SQLITE' && itemName.name ==="sQlite"){
			itemName.num++;
		}
		if(itemSkill==='MONGODB' && itemName.name ==="MongoDb"){
			itemName.num++;
		}
		if(itemSkill==='COUCHDB' && itemName.name ==="CouchDB"){
			itemName.num++;
		}
		if(itemSkill==='REDIS' && itemName.name ==="Redis"){
			itemName.num++;
		}
		if(itemSkill==='CASSANDRA' && itemName.name ==="Cassandra"){
			itemName.num++;
		}
		if(itemSkill==='DB2' && itemName.name ==="DB2"){
			itemName.num++;
		}

		return itemName.num;

		});

	return itemNum;

}

module.exports = getNumSkillsDb;