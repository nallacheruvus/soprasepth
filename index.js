import { Observable } from "rxjs"

function thirdSyntObs() {
    let arr = ["Nuclear Physics", "Nano Physics", "Material Science", "Electronics", "Earth Sciences"];
    var observer = new Observable(function subscribe(subscriber) {
        try {
            // subscriber.next("First Value Out");
            // subscriber.next("Second Value Out");
            // subscriber.next("Third Value Out");
            // subscriber.next("Fourth Value Out");
            // subscriber.next("Fifth Value Out");
            for (let i = 0; i < arr.length; i++) {
                subscriber.next("Prescribed elective for completion: " + arr[i]);
            }
            subscriber.complete();
        }
        catch (e) {
            subscriber.error(e);
        }
    });
    observer.subscribe(x => console.log(x), (e) => console.log(e), () => console.log("Completed Observable!"));
}

function secSyntaxObser() {
    const observable = Observable.create(function subscribe(subscriber) {
        subscriber.next("Second syntax observable called");
    });
    observable.subscribe(x => console.log(x));
}

function firstApproach() {
    const observable = new Observable(function subscribe(subscriber) {
        subscriber.next("First value of observable");
    });
    observable.subscribe(x => console.log(x));
}

