Angular
---------------------

module :
-----------------
	var app = angular.module('Name', ['dependences']);

service :
-----------------
	.provider(name, Object OR constructor() )
	.factory(name, $get Function() )
	.service(name, constructor() )

	路由服务
	$location切换视图



directive :
-----------------


filter :
-----------------
	{{ value | filtername : parameter1 : paremeter2 : ... }}