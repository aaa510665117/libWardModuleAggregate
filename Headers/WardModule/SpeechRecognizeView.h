//
//  SpeechRecognizeView.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/1/2.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import <UIKit/UIKit.h>

typedef enum : NSUInteger {
    SpeechSearchTypePatientAll = 0,//全科室检索
    SpeechSearchTypePatientDept,//指定科室检索
} SpeechSearchType;

@interface SpeechRecognizeView : UIView

@property (nonatomic,assign) SpeechSearchType  searchType;

+ (SpeechRecognizeView *)sharedInsatance;

-(void)showSpeechRecognizeView;

-(void)dismissSpeechRecognizeView;

@end
