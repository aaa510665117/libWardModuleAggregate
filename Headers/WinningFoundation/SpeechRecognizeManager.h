//
//  SpeechRecognizeManager.h
//  SpeechInput
//
//  Created by WinningMac on 2017/12/19.
//  Copyright © 2017年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum : NSUInteger {
    SpeechRecognizeTypeIFly,
    SpeechRecognizeTypeBaidu,
    SpeechRecognizeTypeBaiduLong,
    SpeechRecognizeTypeUSC
} SpeechRecognizeType;

//定为111为无返回是吧结果的错误码
#define NOResultCode 111

@protocol SpeechRecognizeManagerDelegate<NSObject>
@optional
//开始语音识别
-(void)beginSpeechCallBack;
//结束语音识别
-(void)endSpeechCallBack;
//语音识别错误返回
-(void)errorSpeechCallBackWithCode:(int)code andMessage:(NSString *)errorDescription;
//语音识别的音量返回
-(void)volumeChangedCallBack: (int)volume;
@required
//识别结果返回
-(void)resultSpeechCallBack:(NSString *)resultString;
@end


@interface SpeechRecognizeManager : NSObject

@property(nonatomic,strong) id<SpeechRecognizeManagerDelegate> delegate;

+ (SpeechRecognizeManager *)sharedSpeechMamager;


/**
 注册语音识别
 */
-(void)registerSpeechRecognize;

/**
 初始化语音识别
 */
-(void)initSpeechRecognize;

/**
 开始语音识别
 */
-(void)startSpeechRecognize;

/**
 停止语音识别
 */
-(void)stopSpeechRecognize;

/**
 取消语音识别
 */
-(void)cancleSpeechRecognize;

@end
