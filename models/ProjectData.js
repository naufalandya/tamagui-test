class Employee {
    constructor({ jvc, nr }) {
        this.jvc = jvc;
        this.nr = nr;
    }

    static fromJson(json) {
        return new Employee({
            jvc: json.jvc,
            nr: json.nr,
        });
    }
}

class ProjectData {
    constructor({
        name,
        capacity,
        developer,
        shareholdersShare,
        energyGeneratedPerYear,
        equivalentCo2ReductionPerYear,
        location,
        coordinate,
        scheme,
        projectCost,
        tariff,
        totalArea,
        interconnection,
        requiredCod,
        financingDer,
        epcContractor,
        phase,
        employee,
    }) {
        this.name = name;
        this.capacity = capacity;
        this.developer = developer;
        this.shareholdersShare = shareholdersShare;
        this.energyGeneratedPerYear = energyGeneratedPerYear;
        this.equivalentCo2ReductionPerYear = equivalentCo2ReductionPerYear;
        this.location = location;
        this.coordinate = coordinate;
        this.scheme = scheme;
        this.projectCost = projectCost;
        this.tariff = tariff;
        this.totalArea = totalArea;
        this.interconnection = interconnection;
        this.requiredCod = requiredCod;
        this.financingDer = financingDer;
        this.epcContractor = epcContractor;
        this.phase = phase;
        this.employee = employee;
    }

    static fromJson(json) {
        return new ProjectData({
            name: json.name,
            capacity: json.capacity,
            developer: json.developer,
            shareholdersShare: json.shareholders_share,
            energyGeneratedPerYear: json.energy_generated_per_year,
            equivalentCo2ReductionPerYear: json.equivalent_co2_reduction_per_year,
            location: json.location,
            coordinate: json.coordinate,
            scheme: json.scheme,
            projectCost: json.project_cost,
            tariff: json.tariff,
            totalArea: json.total_area,
            interconnection: json.interconnection,
            requiredCod: json.required_cod,
            financingDer: json.financing_der,
            epcContractor: json.epc_contractor,
            phase: json.phase,
            employee: Employee.fromJson(json.employee),
        });
    }
}

export { Employee, ProjectData };
    