/**
 * Binary tree
 * Data is structured in heirarichal format
 * Parent -> Child -> Leaf nodes
 *
 * No of nodes they have
 * A node have 0 or 2 nodes nested nodes
 *
 * Based upon the height the maximum number of operations we need to perform to find a node
 * Big (O) -> O(log n)
 * ^h // h is the height of the tree / No of levels in a tree which we need to go to find a result
 * Or no of operation we need to perform to find an element in a tree
 *
 * O(log n) -> Notation [[Faster and nearly identical to O(1) notation]]
 * We use the divide and conquer and search the record in a small subset of data
 * where we think the data will exist such as a Phone book we search the contact number
 * using alpahbets
 *
 * Difference/Benefit : We don't need to check every single elements as we do in Arrays to iterate over all the elements
 *    Because we can use the heirarichal data to nest and find through the elements
 *
 * Pros
 *    Faster retrieval of data when there is high amount of data
 *    O(log n)
 *    Data is herirarchial and maintains relation between the nodes
 *    Sorted
 *
 * Cons
 *    Edge cases to find data
 *    Data is not ordered
 *
 *
 */
class BinaryTree {}

const family = new BinaryTree();
