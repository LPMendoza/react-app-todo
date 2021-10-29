package com.mendoza.todoapp.ReactImageManager;
import java.util.List;

public class ReactImageManagerPackage implements ReactPackage {
  
  @Override
  public List<ViewManager> createViewManager(ReactApplicationContext reactContext) {
    return Arrays.<ViewManager>asList(
      new ReactImageManager(reactContext)
    );
  }

}