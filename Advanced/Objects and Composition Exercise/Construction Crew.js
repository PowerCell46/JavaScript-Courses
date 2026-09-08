function workerObject(obj) {
    let dizziness = obj["dizziness"];
    if (dizziness) {
        obj["levelOfHydrated"] += 0.1 * Number(obj["weight"]) * Number(obj["experience"]);
        obj["dizziness"] = false;
    }

    return obj;
}
