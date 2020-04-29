import 'package:building_app/pages/signup_pages.dart';
import 'package:flutter/material.dart';
import './pages/login_page.dart';

void main() => runApp(MaterialApp(
      home: LoginPage(),
      title: 'BuildingApp',
      routes: routes,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        hintColor: Colors.white,
        primaryColor: Colors.redAccent,
      ),
    ));

final routes = <String, WidgetBuilder>{
  LoginPage.tag: (context) => LoginPage(),
  SignupPage.tag: (context) => SignupPage(),
};
