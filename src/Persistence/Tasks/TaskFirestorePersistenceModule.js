
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const COLLECTION = 'tasks';

export const storeTask = task => {
    const firestore = firebase.firestore();
    return firestore.collection(COLLECTION).add(task);
};

//  todo, filter later by id when we do auth
export const loadTasksPerDate = date => {
    const firestore = firebase.firestore();
    return new Promise((resolve, reject) => {
        firestore.collection(COLLECTION)
            .where('date' , '==', date)
            .get()
            .catch(reject)
            .then(querySnapshot => {
                resolve(querySnapshot
                    .docs
                    .map(doc => {
                        const task = doc.data();
                        task.remoteId = doc.id;
                        return task;
                    })
                );
            });
    });
};

export const loadAllTasks = (user) => {    
    const firestore = firebase.firestore();
    return new Promise((resolve, reject) => {
        firestore.collection(COLLECTION)
            .where('author' , '==', user.email)
            .get()
            .catch(reject)
            .then(querySnapshot => {
                resolve(querySnapshot
                    .docs
                    .map(doc => {
                        const task = doc.data();
                        task.remoteId = doc.id;
                        return task;
                    })
                );
            });
    });
};

export const updateTask = task => {
    const firestore = firebase.firestore();
    return firestore.collection(COLLECTION)
        .doc(task.remoteId)
        .set(task);
}

export const deleteTask = task => {
    const firestore = firebase.firestore();
    return firestore.collection(COLLECTION)
        .doc(task.remoteId)
        .delete();
}
