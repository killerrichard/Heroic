import navigation from '../../config/navigation.json';

class NavigationController
{
    constructor($state, $scope)
    {
        'ngInject';
        this.$state    = $state;
        this.$scope    = $scope;
        this.$scope.navigationList = [];
        this.$scope.loadedStates   = $state.get();

        this.$onInit = () =>
        {
            this.buildNavigation();
        };
    }

    buildNavigation()
    {
        if(navigation.navigation == null || navigation.navigation.length == 0) return;

        angular.forEach(navigation.navigation, (item, key) =>
        {
            if(item.disabled == true) return;

            angular.forEach(this.$scope.loadedStates, (state, key) =>
            {
                if(state.name != item.state) return;

                item.state = state;
            });

            if(item.subItems == undefined || item.subItems.length == 0)
            {
                return this.$scope.navigationList.push(item);
            }

            item.children = [];

            angular.forEach(item.subItems, (subItem, key) =>
            {
                if(subItem.disabled == true) return;

                angular.forEach(this.$scope.loadedStates, (state, key) =>
                {
                    if(state.name != subItem.state) return;

                    subItem.state = state;

                    item.children.push(subItem);
                });
            });

            delete item.subItems;

            if(item.children.length == 0) return;

            return this.$scope.navigationList.push(item);
        });
    }
}

let NavigationComponent = {
    controller: NavigationController,
    templateUrl: 'views/common/components/header/navigation.html'
};

export default NavigationComponent;
