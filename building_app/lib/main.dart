import 'package:flutter/material.dart';
import './pages/signup_pages.dart';
import './pages/login_page.dart';
import './pages/home_page.dart';

void main() => runApp(MaterialApp(
      home: LoginPage(),
      title: 'BuildingApp',
      routes: routes,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        hintColor: Colors.grey[300],
        primaryColor: Colors.red[700],
      ),
    ));

final routes = <String, WidgetBuilder>{
  LoginPage.tag: (context) => LoginPage(),
  SignupPage.tag: (context) => SignupPage(),
  HomePage.tag: (context) => HomePage()
};
