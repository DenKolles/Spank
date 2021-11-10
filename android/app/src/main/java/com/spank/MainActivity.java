package com.spank;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.os.Handler;
public class MainActivity extends ReactActivity {
    private final int SPLASH_DISPLAY_TIME = 3000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        new Handler().postDelayed(new Runnable(){
            @Override
            public void run() {
                Intent mainIntent = new Intent(MainActivity.this,MainActivity2.class);
                MainActivity.this.startActivity(mainIntent);
                MainActivity.this.finish();
            }
        }, SPLASH_DISPLAY_TIME);
    }
}