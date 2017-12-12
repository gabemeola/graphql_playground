export default function singleton(collection) {
    return Promise.resolve(collection)
        .then((res) => {
            if (res.length > 1) throw new Error('Didn\'t receive singleton value')

            return res[0]
        })
        .catch((err) => {
            throw err;
        })
}