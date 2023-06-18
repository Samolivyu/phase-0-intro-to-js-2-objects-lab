const employee =
{ 
name : "Sam",
streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue (employee, object, key, value); 
{
    return {
        ...employee, [key]:value
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue (name,streetAddress)
{
    return {
        [streetAddress]: "12 Broadway"
    };
}