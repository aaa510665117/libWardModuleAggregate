//
//  SpeechButton.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/8/2.
//  Copyright © 2019 Ran. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol SpeechButtonDelegate <NSObject>

//处理返回
-(void)speechButtonResultCallBack:(NSString *)resultString;
//处理相应UI展示
-(void)speechButtonStartSpeechRecognize;//开始识别时
-(void)speechButtonStopSpeechRecognize;//结束识别时

@end

@interface SpeechButton : UIButton

-(instancetype)initWithIcon:(NSString *)imageName;

@property (nonatomic,weak) id<SpeechButtonDelegate>  delegate;

@end

NS_ASSUME_NONNULL_END
