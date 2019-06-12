class Component {
    constructor(props) {
        this.props = props;
    }

    update() {
        console.log('default update');
    }

    add(child) {
        this.props.children.push(child);
    }

    remove(child) {
        this.props.children.splice(this.props.children.indexOf(child));
    }

    getChild(name) {
        return this.props.children.find(function(child){
            return child.props.name == name;
        });
    }
}
class Engine extends Component {
    update() {
        for (const child of this.props.children) {
            child.update();
        }
    }
}
class EntityManager extends Component {
    update() {
        for (const child of this.props.children) {
            child.update();
        }
    }
}
class PhysicsManager extends Component {
    update() {
        console.log(this.props.name + ' updated');
    }
}
class Entity extends Component {
    update() {
        console.log(this.props.name + ' entity updated');
    }
}
const physicsManager = new PhysicsManager({name: 'PHYSICS_MANAGER'});
const playerEntity = new Entity({name: 'PLAYER'});
const nonPlayerEntity = new Entity({name: 'NON_PLAYER'});

const entityManager = new EntityManager({
    name: 'ENTITY_MANAGER', 
    children: [playerEntity, nonPlayerEntity]
});

const engine = new Engine({
    name: 'ENGINE',
    children: [physicsManager, entityManager]
});

engine.update();

