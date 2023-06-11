import useClass from "../../../Hooks/useClass";

const SelectClass = () => {
    
    const [loadClass] =useClass();
    console.log(loadClass);

    return (
        <div>
            <h2> all select class</h2>
        </div>
    );
};

export default SelectClass;