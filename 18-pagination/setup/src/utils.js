/**Pagination app version 2 - 'App' js file - Features:
 * 
 *      --> Building 'newFollowers' array
 *          that will have the array from 
 *          arrays
 * 
 * Note: In this case i will make a slice of
 * the 100 array 'followers' and it will be 
 * named as 'newFollowers' 
 */
const paginate = (followers) => {
    const itemsPerPage = 9;
    /**here i calculate the items per page
     * -'Math.ceil' round the division to a 
     * -exact number-
     */

    const pages = Math.ceil(followers.length / itemsPerPage)
    console.log('profiles #', pages)

    /**taking the 100 items array i make  'newFollowers'
     * that will keep a new array of 'length: pages'
     * -'Array.from()' makes a new arrray
    */
    const newFollowers = Array.from(
    /**the first argument 'length' and the second
     * argument the 'index'
     * -the underscore '_' will be the undefined array-
     * -i need the 'index' to fill it with the API data-
    */
            {length: pages}, (_, index) =>{
        /**the 'start' will help to pull out the API data
         * for the 'newFollowers array'
        */
        const start = index * itemsPerPage;

        console.log('this is the start value -->', start)
        /**then from 'followers' the 100 array i make
         * a 'silce' of start '9 each', and 'start plus
         * itemsPerpage' to calculate the total pages
        */
        return followers.slice(start, start + itemsPerPage)
    })

    /**i return the new Array */
    return newFollowers;

    console.log('the array from arrays-->',newFollowers)
}

export default paginate
