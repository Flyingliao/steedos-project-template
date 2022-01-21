module.exports = {

    ruzhi: function(object_name, record_id) {
        var record = Creator.getObjectRecord();
        var initialValues = {
            name: record.name,
            yg_name__c: record.yg_name__c,
            zj_type__c: record.zj_type__c,
            zj_number__c: record.zj_number__c,
            phone__c: record.phone__c,
            yg_state__c: '试用',
            rzd__c: record_id,
            beizhu__c: record.beizhu__c
        }
        console.log('initialValues==>', initialValues);
        SteedosUI.showModal(stores.ComponentRegistry.components.ObjectForm, {
            name: `standard_new_form`,
            objectApiName: 'hmc__c',
            title: '确认入职',
            initialValues
        }, null, {
            iconPath: '/assets/icons'
        });
    },
    ruzhiVisible: function(object_name, record_id, permissions, record) {
        console.log('ruzhiVisible==>', object_name, record_id, permissions, record);
        if (record.rz_state__c === "待入职" && record.instance_state === 'approved') {
            return true;
        } else {
            return false;
        }
    }

}