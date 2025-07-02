class Solution {
public:
    int minimumSum(int num) {
     // Convert the number to a string to process each digit
    string numStr = to_string(num);
        cout << "Original number as string: " << numStr << endl; // Debug print

    // Convert the string into a vector of characters (digits)
    vector<char> digits(numStr.begin(), numStr.end());
    
    // Sort the digits in ascending order
    sort(digits.begin(), digits.end());
    
    // Construct the two numbers
    string m1 = "";
    m1 += digits[0];
    m1 += digits[3];
    
    string m2 = "";
    m2 += digits[1];
    m2 += digits[2];
    
    // Convert the strings back to integers and return their sum
    return stoi(m1) + stoi(m2);
}
};