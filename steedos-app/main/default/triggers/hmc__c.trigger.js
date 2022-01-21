const objectql = require('@steedos/objectql');

module.exports = {
    listenTo: 'hmc__c',
    afterInsert: async function () {
        console.log('this==>',this.doc)
        const rzd_object_id = this.doc.rzd__c; 
        const result = await objectql.getObject('rzgl__c').update(rzd_object_id, {rz_state__c: '已入职' });
        console.log('result==>', result)
    },
    afterUpdate: async function () {
        console.log('afterUpdate==>',this.doc)
    },
}