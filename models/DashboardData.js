// models/DashboardData.js

export class DashboardData {
    constructor({
        totalInvest,
        totalCapacity,
        totalProduction,
        powerActive,
        esgRating,
        savingCoal,
        co2Avoid,
        treePlantsEqual,
        capacityByType,
        projectStateByPhase,
        location,
    }) {
        this.totalInvest = totalInvest;
        this.totalCapacity = totalCapacity;
        this.totalProduction = totalProduction;
        this.powerActive = powerActive;
        this.esgRating = esgRating;
        this.savingCoal = savingCoal;
        this.co2Avoid = co2Avoid;
        this.treePlantsEqual = treePlantsEqual;
        this.capacityByType = capacityByType;
        this.projectStateByPhase = projectStateByPhase;
        this.location = location;
    }

    static fromJson(json) {
        return new DashboardData({
            totalInvest: json.total_invest,
            totalCapacity: json.total_capacity,
            totalProduction: json.total_production,
            powerActive: json.power_active,
            esgRating: parseFloat(json.esg_rating),
            savingCoal: json.saving_coal,
            co2Avoid: json.co2_avoid,
            treePlantsEqual: json.tree_plants_equal,
            capacityByType: CapacityByType.fromJson(json.capacity_by_type),
            projectStateByPhase: ProjectStateByPhase.fromJson(json.project_state_by_phase),
            location: json.location.map((loc) => Location.fromJson(loc)),
        });
    }
}

export class CapacityByType {
    constructor({ pltu, plts, plta, pltb }) {
        this.pltu = pltu;
        this.plts = plts;
        this.plta = plta;
        this.pltb = pltb;
    }

    static fromJson(json) {
        return new CapacityByType({
            pltu: json.pltu,
            plts: json.plts,
            plta: json.plta,
            pltb: json.pltb,
        });
    }
}

export class ProjectStateByPhase {
    constructor({ ebt, nonEbt }) {
        this.ebt = ebt;
        this.nonEbt = nonEbt;
    }

    static fromJson(json) {
        return new ProjectStateByPhase({
            ebt: Ebt.fromJson(json.ebt),
            nonEbt: NonEbt.fromJson(json.non_ebt),
        });
    }
}

export class Ebt {
    constructor({ pengembangan, konstruksi, operasi }) {
        this.pengembangan = pengembangan;
        this.konstruksi = konstruksi;
        this.operasi = operasi;
    }

    static fromJson(json) {
        return new Ebt({
            pengembangan: json.pengembangan,
            konstruksi: json.konstruksi,
            operasi: json.operasi,
        });
    }
}

export class NonEbt {
    constructor({ pengembangan, konstruksi, operasi }) {
        this.pengembangan = pengembangan;
        this.konstruksi = konstruksi;
        this.operasi = operasi;
    }

    static fromJson(json) {
        return new NonEbt({
            pengembangan: json.pengembangan,
            konstruksi: json.konstruksi,
            operasi: json.operasi,
        });
    }
}

export class Location {
    constructor({
        lat,
        lng,
        nameproject,
        namecompany,
        powercapacity,
        type,
        title,
        slug,
        status,
    }) {
        this.lat = lat;
        this.lng = lng;
        this.nameproject = nameproject;
        this.namecompany = namecompany;
        this.powercapacity = powercapacity;
        this.type = type;
        this.title = title;
        this.slug = slug;
        this.status = status;
    }

    static fromJson(json) {
        return new Location({
            lat: parseFloat(json.lat),
            lng: parseFloat(json.lng),
            nameproject: json.nameproject,
            namecompany: json.namecompany,
            powercapacity: json.powercapacity,
            type: json.type,
            title: json.title,
            slug: json.slug,
            status: json.status,
        });
    }
}
