const parseData = ({data, column}) => {
    let output = [];
    for (const user of data) {
        output.push(constructUser(user, column));
    }
    console.log(output);
    return output;
};

const constructUser = (userData, column) => {
    let user = {};
    column.forEach((property, index) => {
        user[property.name] = userData[index];
    });
    return user;
}

export { parseData };
