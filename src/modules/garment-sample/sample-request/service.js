import { RestService } from '../../../utils/rest-service';

const serviceUri = 'garment-sample-requests';

class Service extends RestService {
    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "garment-production");
    }

    search(info) {
        var endpoint = `${serviceUri}`;
        return super.list(endpoint, info);
    }

    searchComplete(info) {
        var endpoint = `${serviceUri}/complete`;
        return super.list(endpoint, info);
    }

    create(data) {
        var endpoint = `${serviceUri}`;
        return super.post(endpoint, data);
    }

    read(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.get(endpoint);
    }

    update(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.put(endpoint, data);
    }

    delete(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.delete(endpoint, data);
    }

    postSample(data) {
        var endpoint = `${serviceUri}/post`;
        return super.put(endpoint, data);
    }

    getPdfById(id) {
        var endpoint = `${serviceUri}/get-pdf/${id}`;
        return super.getPdf(endpoint);
    }
}

const unitDeliveryOrderServiceUri = 'garment-unit-delivery-orders';  
class PurchasingService extends RestService {

    constructor(http, aggregator, config, endpoint){
        super(http, aggregator, config, "purchasing-azure")
    }

    searchUnitDeliveryOrder(info) {
        var endpoint = `${unitDeliveryOrderServiceUri}`;
        return super.list(endpoint, info);
    }

    
}

export { Service,PurchasingService }